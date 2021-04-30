import { AppContext } from "./appcontext";
import { Class } from "./class";
import { JSONObject } from "./json";
import { ServiceEndpoint } from "./serviceendpoint";
export declare class ScriptRunner extends ServiceEndpoint {
    private scriptingServiceRender;
    constructor(context: AppContext, providerAddress: string);
    callScript<T>(name: string, params: JSONObject, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T>;
    callScriptUrl<T>(name: string, params: string, targetDid: string, targetAppDid: string, resultType: Class<T>): Promise<T>;
    downloadFile<T>(transactionId: string, resultType: Class<T>): Promise<T>;
    uploadFile<T>(transactionId: string, resultType: Class<T>): Promise<T>;
}
