import { AppContext } from "../appcontext";
import { ServiceEndpoint } from "../serviceendpoint";
import { ConnectionManager } from "../connection/connectionmanager";
import { HttpExceptionHandler } from "./httpexceptionhandler";
import { CompletionException } from "../exception/unsupportedoperationexception";

export abstract class HiveVaultRender extends HttpExceptionHandler {
    private context: AppContext;
    private serviceEndpoint: ServiceEndpoint;

    protected constructor(serviceEndpoint: ServiceEndpoint) {
        super();
        this.serviceEndpoint = serviceEndpoint;
        this.context = serviceEndpoint.getAppContext();
    }

    protected getAppContext(): AppContext {
        return this.context;
    }

    protected getServiceEndpoint(): ServiceEndpoint {
        return this.serviceEndpoint;
    }

    protected getConnectionManager(): ConnectionManager {
        return this.serviceEndpoint.getConnectionManager();
    }

    // TODO: do we really need those CompletionExceptions inherited from java ?
    protected promiseWithConvertedException<T>(runnable: ()=>T): Promise<T> {
        return new Promise<T>((resolve, reject)=>{
            try {
                resolve(runnable());
            }
            catch (e) {
				throw new CompletionException(this.convertException(e));
			}
        });
    }
}
