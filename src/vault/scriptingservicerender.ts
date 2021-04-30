import { Class } from "../class";
import { InvalidParameterException } from "../exception/invalidparameterexception";
import { CompletionException } from "../exception/unsupportedoperationexception";
import { JSONObject } from "../json";
import { Condition } from "../network/model/condition";
import { Executable } from "../network/model/executable";
import { ScriptContext } from "../network/model/scriptcontext";
import { CallScriptRequestBody } from "../network/request/callscriptrequestbody";
import { RegisterScriptRequestBody } from "../network/request/registerscriptrequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { ScriptingApi } from "../network/scriptingapi";
import { ScriptingService } from "../service/scriptingservice";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";

export class ScriptingServiceRender extends HiveVaultRender implements ScriptingService, HttpExceptionHandler {
	public constructor(serviceEndpoint: ServiceEndpoint) {
		super(serviceEndpoint);
	}

	public registerScript(name: string, executable: Executable, condition: Condition = null, allowAnonymousUser: boolean = false, allowAnonymousApp: boolean = false): Promise<boolean> {
		return this.promiseWithConvertedException<boolean>(()=>{
			HiveResponseBody.validateBody(
					this.getConnectionManager().getScriptingApi()
							.registerScript(new RegisterScriptRequestBody().setName(name)
									.setExecutable(executable)
									.setAllowAnonymousUser(allowAnonymousUser)
									.setAllowAnonymousApp(allowAnonymousApp)
									.setCondition(condition))
							.execute().body());
			return true;
		});
	}

	public callScript<T>(name: string, params: JSONObject, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T> {
		return this.promiseWithConvertedException<T>(()=>{
			return HiveResponseBody.getValue(HiveResponseBody.validateBodyStr(
					this.getConnectionManager().getScriptingApi()
							.callScript(new CallScriptRequestBody()
									.setName(name)
									.setContext(new ScriptContext()
											.setTargetDid(targetDid)
											.setTargetAppDid(targetAppDid))
									.setParams(HiveResponseBody.jsonNode2Map(params)))
							.execute()
			), resultType);
		});
	}

	public callScriptUrl<T>(name: string, params: string, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T> {
		return this.promiseWithConvertedException<T>(()=>{
			return HiveResponseBody.getValue(HiveResponseBody.validateBodyStr(
					this.getConnectionManager().getScriptingApi()
							.callScriptUrl(targetDid, targetAppDid, name, params)
							.execute()
			), resultType);
		});
	}

	public uploadFile<T>(transactionId: string, resultType: Class<T>): Promise <T> {
		return this.promiseWithConvertedException<T>(()=>{
			if (transactionId == null)
				throw new InvalidParameterException("Invalid parameter transactionId.");

			return HiveResponseBody.getRequestStream(
					this.getConnectionManager().openConnection(ScriptingApi.API_SCRIPT_UPLOAD + "/" + transactionId),
					resultType);
		});
	}

	public downloadFile<T>(transactionId: string, resultType: Class<T>): Promise<T> {
		return this.promiseWithConvertedException<T>(()=>{
			if (transactionId == null)
				throw new InvalidParameterException("Invalid parameter transactionId.");

			return HiveResponseBody.getResponseStream(
					this.getConnectionManager().getScriptingApi()
							.callDownload(transactionId)
							.execute(),
					resultType);
		});
	}
}
