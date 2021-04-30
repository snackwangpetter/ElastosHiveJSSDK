import { AppContext } from "./appcontext";
import { ConnectionManager } from "./connection/connectionmanager";
import { HttpExceptionHandler } from "./vault/httpexceptionhandler";
export declare class ServiceEndpoint extends HttpExceptionHandler {
    private context;
    private providerAddress;
    private connectionManager;
    protected constructor(context: AppContext, providerAddress: string);
    getAppContext(): AppContext;
    getUserDid(): string;
    getProviderAddress(): string;
    getConnectionManager(): ConnectionManager;
    getAppDid(): string;
    getAppInstanceDid(): string;
    getServiceDid(): string;
    getServiceInstanceDid(): string;
    protected promiseWithConvertedException<T>(runnable: () => Promise<T>): Promise<T>;
}
