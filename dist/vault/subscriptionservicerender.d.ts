import { VaultInfoResponseBody } from "../network/response/vaultinforesponsebody";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";
export declare class SubscriptionServiceRender extends HiveVaultRender {
    constructor(serviceEndpoint: ServiceEndpoint);
    subscribe(): void;
    subscribeBackup(): void;
    unsubscribe(): void;
    activate(): void;
    deactivate(): void;
    getVaultInfo(): VaultInfoResponseBody;
    getBackupVaultInfo(): VaultInfoResponseBody;
}
