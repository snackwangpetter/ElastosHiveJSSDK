import { Class } from "../class";
import { JSONObject } from "../json";
import { Condition } from "../network/model/condition";
import { Executable } from "../network/model/executable";
import { ScriptingService } from "../service/scriptingservice";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";
export declare class ScriptingServiceRender extends HiveVaultRender implements ScriptingService, HttpExceptionHandler {
    constructor(serviceEndpoint: ServiceEndpoint);
    registerScript(name: string, executable: Executable, condition?: Condition, allowAnonymousUser?: boolean, allowAnonymousApp?: boolean): Promise<boolean>;
    callScript<T>(name: string, params: JSONObject, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T>;
    callScriptUrl<T>(name: string, params: string, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T>;
    uploadFile<T>(transactionId: string, resultType: Class<T>): Promise<T>;
    downloadFile<T>(transactionId: string, resultType: Class<T>): Promise<T>;
}
