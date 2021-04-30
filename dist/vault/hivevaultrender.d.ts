import { AppContext } from "../appcontext";
import { ServiceEndpoint } from "../serviceendpoint";
import { ConnectionManager } from "../connection/connectionmanager";
import { HttpExceptionHandler } from "./httpexceptionhandler";
export declare abstract class HiveVaultRender extends HttpExceptionHandler {
    private context;
    private serviceEndpoint;
    protected constructor(serviceEndpoint: ServiceEndpoint);
    protected getAppContext(): AppContext;
    protected getServiceEndpoint(): ServiceEndpoint;
    protected getConnectionManager(): ConnectionManager;
    protected promiseWithConvertedException<T>(runnable: () => T): Promise<T>;
}
