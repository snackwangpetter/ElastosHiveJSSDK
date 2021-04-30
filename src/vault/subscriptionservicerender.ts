import { throws } from "node:assert";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { VaultInfoResponseBody } from "../network/response/vaultinforesponsebody";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";

/**
 * Helper class for subscription api.
 */
export class SubscriptionServiceRender extends HiveVaultRender {
    public constructor(serviceEndpoint: ServiceEndpoint) {
        super(serviceEndpoint);
    }

    public subscribe() {
        let body = HiveResponseBody.validateBody(
            this.getConnectionManager().getSubscriptionApi()
                        .createVault()
                        .execute()
                        .body());
        if (Boolean.TRUE.equals(body.getExisting())) {
            throw new VaultAlreadyExistException("The vault already exists");
        }
    }

    public subscribeBackup() {
        let body = HiveResponseBody.validateBody(
            this.getConnectionManager().getSubscriptionApi()
                        .createBackupVault()
                        .execute()
                        .body());
        if (Boolean.TRUE.equals(body.getExisting())) {
            throw new VaultAlreadyExistException("The backup vault already exists");
        }
    }

    public unsubscribe() {
        HiveResponseBody.validateBody(
            this.getConnectionManager().getSubscriptionApi()
                        .removeVault()
                        .execute()
                        .body());
    }

    public activate() {
        HiveResponseBody.validateBody(
            this.getConnectionManager().getSubscriptionApi()
                        .unfreeze()
                        .execute()
                        .body());
    }

    public deactivate() {
        HiveResponseBody.validateBody(
            this.getConnectionManager().getSubscriptionApi()
                        .freeze()
                        .execute()
                        .body());
    }

    public  getVaultInfo(): VaultInfoResponseBody {
        return HiveResponseBody.validateBody(
            this.getConnectionManager().getSubscriptionApi()
                        .getVaultInfo()
                        .execute()
                        .body());
    }

    public getBackupVaultInfo(): VaultInfoResponseBody {
        return HiveResponseBody.validateBody(
            this.getConnectionManager().getSubscriptionApi()
                    .getBackupVaultInfo()
                    .execute()
                    .body());
    }
}
