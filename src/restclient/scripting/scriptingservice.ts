import { InvalidParameterException, IOException, NetworkException, NodeRPCException, NotFoundException, ServerUnknownException, UnauthorizedException, VaultForbiddenException } from '../../exceptions';
import { Condition } from './condition';
import { Executable } from './executable';
import { ServiceContext } from '../../http/servicecontext';
import { HttpClient } from '../../http/httpclient';
import { RegScriptParams } from './RegScriptParams';
import { RunScriptParams } from './RunScriptParams';
import { HttpResponseParser } from '../../http/httpresponseparser';
import { Class } from '../../class';
import { Context } from './Context';
import { HttpMethod } from '../../http/httpmethod';
import { checkNotNull } from '../../domain/utils';
import { Logger } from '../../logger';

export class ScriptingService {
	private static LOG = new Logger("ScriptingService");

	private static API_SCRIPT_ENDPOINT = "/api/v2/vault/scripting";
	private static API_SCRIPT_UPLOAD_ENDPOINT = "/api/v2/vault/scripting/stream"; 

	private httpClient: HttpClient;
	private serviceContext: ServiceContext;

    constructor(serviceContext: ServiceContext, httpClient: HttpClient) {
		this.serviceContext = serviceContext;
		this.httpClient = httpClient;
    }
    
	async registerScript(name: string, executable: Executable) : Promise<void>;
    
	async registerScript(name: string, executable: Executable, condition?: Condition) : Promise<void>;
	
	/**
	* Let the vault owner register a script on his vault for a given application.
	*
	* @param name the name of script to register
	* @param condition the condition on which the script could be executed.
	* @param executable the executable body of the script with preset routines
	* @param allowAnonymousUser whether allows anonymous user.
	* @param allowAnonymousApp whether allows anonymous application.
	* @return Void
	*/
	async registerScript(name: string, executable: Executable, condition?: Condition, allowAnonymousUser?: boolean, allowAnonymousApp?: boolean) : Promise<void> {
		checkNotNull(name, "Missing script name.");
		checkNotNull(executable, "Missing executable script");

		let params = new RegScriptParams()
			.setExecutable(executable)
			.setCondition(condition)
			.setAllowAnonymousUser(allowAnonymousUser)
			.setAllowAnonymousApp(allowAnonymousApp)
			.toString();

        try {	
			await this.httpClient.send<void>(`${ScriptingService.API_SCRIPT_ENDPOINT}/${name}`, params, HttpClient.NO_RESPONSE, HttpMethod.PUT);
		} 
		catch (e){
			if (e instanceof NodeRPCException) {

				// TODO: waiting for the codes
				switch (e.getCode()) {
					case NodeRPCException.UNAUTHORIZED:
						throw new UnauthorizedException(e.message);
					case NodeRPCException.FORBIDDEN:
						throw new VaultForbiddenException(e.message);
					case NodeRPCException.BAD_REQUEST:
						throw new InvalidParameterException(e.message);
					default:
						throw new ServerUnknownException(e.message);
				}
			}
			if (e instanceof IOException){
				throw new NetworkException(e.message);
			}	
		}
	}
	
	// TODO: handle this method signature
	// async registerScriptWithoutCondition(name: string, executable: Executable, allowAnonymousUser: boolean, allowAnonymousApp: boolean) : Promise<void>{
	// 	this.registerScript(name, executable, undefined, allowAnonymousUser, allowAnonymousApp);
	// }
		
	async unregisterScript(name: string) : Promise<void>{

		try {	
			await this.httpClient.send<void>(`${ScriptingService.API_SCRIPT_ENDPOINT}/${name}`, HttpClient.NO_PAYLOAD, HttpClient.NO_RESPONSE, HttpMethod.DELETE);
		} 
		catch (e){
			if (e instanceof NodeRPCException) {
				switch (e.getCode()) {
					case NodeRPCException.UNAUTHORIZED:
						throw new UnauthorizedException(e.message);
					case NodeRPCException.FORBIDDEN:
						throw new VaultForbiddenException(e.message);
					case NodeRPCException.BAD_REQUEST:
						throw new InvalidParameterException(e.message);
					case NodeRPCException.NOT_FOUND:
						throw new NotFoundException(e.message);
					default:
						throw new ServerUnknownException(e.message);
				}
			} else if (e instanceof IOException){
				throw new NetworkException(e.message);
			}	
		}
	
	}

	async callScript<T>(name: string, params: any, targetDid: string, targetAppDid: string, resultType:  Class<T>) : Promise<T> {
		checkNotNull(name, "Missing script name.");
		checkNotNull(params, "Missing parameters to run the script");
		checkNotNull(targetDid, "Missing target user DID");
		checkNotNull(targetAppDid, "Missing target application DID");
		checkNotNull(resultType, "Missing result type");

		try {
			// TODO: not sure about the returning types
			let runScriptParams = new RunScriptParams()
				.setContext(new Context().setTargetDid(targetDid).setTargetAppDid(targetAppDid))
				.setParams(params)
				.toString();

			let returnValue : T  = await this.httpClient.send<T>(`${ScriptingService.API_SCRIPT_ENDPOINT}/${name}`, runScriptParams, <HttpResponseParser<T>> {
				deserialize(content: any): T {
					return JSON.parse(content) as T;
				}
			}, HttpMethod.PATCH);
			
			return returnValue;
		} 
		catch (e) {
			if (e instanceof NodeRPCException) {
				switch (e.getCode()) {
					case NodeRPCException.UNAUTHORIZED:
						throw new UnauthorizedException(e.message);
					case NodeRPCException.FORBIDDEN:
						throw new VaultForbiddenException(e.message);
					case NodeRPCException.BAD_REQUEST:
						throw new InvalidParameterException(e.message);
					case NodeRPCException.NOT_FOUND:
						throw new NotFoundException(e.message);
					default:
						throw new ServerUnknownException(e.message);
				}
			} else if (e instanceof IOException){
				throw new NetworkException(e.message);
			}	
		}
	}

	async callScriptUrl<T>( name: string, params: string, targetDid: string, targetAppDid: String, resultType: Class<T>) {
		checkNotNull(name, "Missing script name.");
		checkNotNull(params, "Missing parameters to run the script");
		checkNotNull(targetDid, "Missing target user DID");
		checkNotNull(targetAppDid, "Missing target application DID");
		checkNotNull(resultType, "Missing result type");
		
		try{
			let returnValue : T  = await this.httpClient.send<T>(`${ScriptingService.API_SCRIPT_ENDPOINT}/${name}/${targetDid}@${targetAppDid}/${params}`, HttpClient.NO_PAYLOAD, <HttpResponseParser<T>> {
				deserialize(content: any): T {
					return JSON.parse(content) as T;
				}
			},HttpMethod.GET);
			
			return returnValue;
		} 
		catch (e) {
			if (e instanceof NodeRPCException) {
				switch (e.getCode()) {
					case NodeRPCException.UNAUTHORIZED:
						throw new UnauthorizedException(e.message);
					case NodeRPCException.FORBIDDEN:
						throw new VaultForbiddenException(e.message);
					case NodeRPCException.BAD_REQUEST:
						throw new InvalidParameterException(e.message);
					case NodeRPCException.NOT_FOUND:
						throw new NotFoundException(e.message);
					default:
						throw new ServerUnknownException(e.message);
				}
			} else if (e instanceof IOException){
				throw new NetworkException(e.message);
			}	
		}
	}
		
	
	async uploadFile<T>(transactionId: string, resultType: Class<T>) {
		checkNotNull(transactionId, "Missing transactionId.");
		checkNotNull(resultType, "Missing result type");

		try {
			let returnValue : T  = await this.httpClient.send<T>(`${ScriptingService.API_SCRIPT_UPLOAD_ENDPOINT}/${transactionId}`, HttpClient.NO_PAYLOAD, <HttpResponseParser<T>> {
				deserialize(content: any): T {
					return JSON.parse(content) as T;
				}
			},HttpMethod.GET);
			
			return returnValue;

		} catch (e) {
			if (e instanceof NodeRPCException) {
				throw new ServerUnknownException(e.message);
			} else if (e instanceof IOException) {
				throw new NetworkException(e.message);
			}

		}
		
	}

	async downloadFile<T>(transactionId: string, resultType: Class<T>) {
		checkNotNull(transactionId, "Missing transactionId.");
		checkNotNull(resultType, "Missing result type");

		try {
			let returnValue : T  = await this.httpClient.send<T>(`${ScriptingService.API_SCRIPT_UPLOAD_ENDPOINT}/${transactionId}`, {}, <HttpResponseParser<T>>{
				deserialize(content: any): T {
					return JSON.parse(content) as T;
				}
			},HttpMethod.GET);
		} catch (e) {
			switch (e.getCode()) {
				case NodeRPCException.UNAUTHORIZED:
					throw new UnauthorizedException(e);
				case NodeRPCException.FORBIDDEN:
					throw new VaultForbiddenException(e);
				case NodeRPCException.BAD_REQUEST:
					throw new InvalidParameterException(e.getMessage());
				case NodeRPCException.NOT_FOUND:
					throw new NotFoundException(e);
				default:
					throw new ServerUnknownException(e);
			}
		}
	}
}



