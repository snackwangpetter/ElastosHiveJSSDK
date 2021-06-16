import { AppContext } from "./appcontext";
import { ConnectionManager } from "./connection/connectionmanager";
import { Exception, CompletionException } from "./exception/exception";
import { HttpExceptionHandler } from "./vault/httpexceptionhandler";

export class ServiceEndpoint extends HttpExceptionHandler {
	private context: AppContext;
	private providerAddress: string;
	private connectionManager: ConnectionManager;

	protected constructor(context: AppContext, providerAddress: string) {
		super();
		this.context = context;
		this.providerAddress = providerAddress;
		this.connectionManager = new ConnectionManager(this);
	}

	public getAppContext(): AppContext {
		return this.context;
	}

	public getUserDid(): string {
		return this.context.getUserDid();
	}

	public getProviderAddress(): string {
		return this.providerAddress;
	}

	public getConnectionManager(): ConnectionManager {
		return this.connectionManager;
	}

	public getAppDid(): string {
		return null;
	}

	public getAppInstanceDid(): string {
		return null;
	}

	public getServiceDid(): string {
		return null;
	}

	public getServiceInstanceDid(): string {
		return null;
	}

	// TODO: do we really need those CompletionExceptions inherited from java ?
    protected promiseWithConvertedException<T>(runnable: ()=>Promise<T>): Promise<T> {
        return new Promise<T>(async (resolve, reject)=>{
            try {
                resolve(await runnable());
            }
            catch (e) {
				throw new CompletionException(this.convertException(e as Exception));
			}
        });
    }
}
