import { AppContext } from "./appcontext";
import { ConnectionManager } from "./connection/connectionmanager";

export class ServiceEndpoint {
	private context: AppContext;
	private providerAddress: string;
	private connectionManager: ConnectionManager;

	protected constructor(context: AppContext, providerAddress: string) {
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
}
