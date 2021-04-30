import { Get, Post } from "pretend";
import { BaseApi } from "./baseapi";
import { CallScriptRequestBody } from "./request/callscriptrequestbody";
import { RegisterScriptRequestBody } from "./request/registerscriptrequestbody";
import { RegisterScriptResponseBody } from "./response/registerscriptresponsebody";

export class ScriptingApi {
	private static API_SCRIPT_UPLOAD = "/scripting/run_script_upload";

	@Post(BaseApi.API_VERSION + "/scripting/set_script")
	registerScript(/* @Body  */body: RegisterScriptRequestBody): Promise<RegisterScriptResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/scripting/run_script")
	callScript(/* @Body  */body: CallScriptRequestBody): Promise</* ResponseBody */any> { return null; }

	@Get(BaseApi.API_VERSION+"/scripting/run_script_url/{targetDid}@{appDid}/{scriptName}")
	callScriptUrl(targetDid: string, appDid: string, scriptName: string, /* @Query("params")  */params: string): Promise</* ResponseBody */any> { return null; }

	@Post(BaseApi.API_VERSION + "/scripting/run_script_download/{transactionId}")
	callDownload(transactionId: string): Promise</* ResponseBody */any> { return null; }
}
