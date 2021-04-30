import { AppContext } from "./appcontext";
import { Class } from "./class";
import { JSONObject } from "./json";
import { ServiceEndpoint } from "./serviceendpoint";
import { ScriptingServiceRender } from "./vault/scriptingservicerender";

export class ScriptRunner extends ServiceEndpoint {
	private scriptingServiceRender: ScriptingServiceRender;

	public constructor(context: AppContext, providerAddress: string) {
		super(context, providerAddress);
		this.scriptingServiceRender = new ScriptingServiceRender(this);
	}

	/**
	 * Executes a previously registered server side script using Scripting.setScript().
	 * Vault owner or external users are allowed to call scripts on someone's vault.
	 *
	 * @param name       The call's script name
	 * @param resultType String, byte[], JsonNode, Reader
	 * @param <T> 		 String, byte[], JsonNode, Reader
	 * @return 			 Result for specific script type
	 */
	public callScript<T>(name: string, params: JSONObject, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T> {
		return this.scriptingServiceRender.callScript(name, params, targetDid, targetAppDid, resultType);
	}

	/**
	 * Executes a previously registered server side script with a direct URL
	 * where the values can be passed as part of the query.
	 * Vault owner or external users are allowed to call scripts on someone's vault.
	 *
	 * @param name       The call's script name
	 * @param resultType String, byte[], JsonNode, Reader, Write, OutputStream, Reader, InputStream
	 * @param <T>        String, byte[], JsonNode, Reader, Write, OutputStream, Reader, InputStream
	 * @return 			 Result for specific script type
	 */
	public callScriptUrl<T>(name: string, params: string, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T> {
		return this.scriptingServiceRender.callScriptUrl(name, params, targetDid, targetAppDid, resultType);
	}

	/**
	 * Run a script to upload a file NOTE: The upload works a bit differently compared to other
	 * types of executable queries because there are two steps to this executable. First, register a
	 * script on the vault, then you call this api to actually upload the file
	 * @param transactionId Transaction id
	 * @param resultType    Write, OutputStream
	 * @param <T>           Write, OutputStream
	 * @return 				Write, OutputStream
	 */
	public downloadFile<T>(transactionId: string, resultType: Class<T>): Promise<T> {
		return this.scriptingServiceRender.downloadFile(transactionId, resultType);
	}

	/**
	 * Run a script to download a file NOTE: The download works a bit differently compared to other
	 * types of executable queries because there are two steps to this executable. First, register a
	 * script on the vault, then you call this api to actually upload the file
	 * @param resultType Reader or InputStream class
	 * @param <T>        Reader, InputStream
	 * @return			 Reader, InputStream
	 */
	public uploadFile<T>(transactionId: string, resultType: Class<T>): Promise<T> {
		return this.scriptingServiceRender.uploadFile(transactionId, resultType);
	}
}
