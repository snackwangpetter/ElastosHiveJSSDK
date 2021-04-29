import { AppContext } from "../appcontext";
import { ServiceEndpoint } from "../serviceendpoint";
import { ConnectionManager } from "../connection/connectionmanager";

export abstract class HiveVaultRender {
    private context: AppContext;
    private serviceEndpoint: ServiceEndpoint;

    protected constructor(serviceEndpoint: ServiceEndpoint) {
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
}
