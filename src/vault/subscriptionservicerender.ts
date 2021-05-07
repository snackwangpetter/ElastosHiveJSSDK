import { throws } from "node:assert";
import { VaultAlreadyExistsException } from "../exception/vaultalreadyexistsexception";
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

    public async subscribe() {
        let body = HiveResponseBody.validateBody(
            await this.getConnectionManager().getSubscriptionApi()
                        .createVault()
                        /* .execute()
                        .body() */);
        if (body.getExisting()) {
            throw new VaultAlreadyExistsException("The vault already exists");
        }
    }

    public async subscribeBackup() {
        let body = HiveResponseBody.validateBody(
            await this.getConnectionManager().getSubscriptionApi()
                        .createBackupVault()
                        /* .execute()
                        .body() */);
        if (body.getExisting()) {
            throw new VaultAlreadyExistsException("The backup vault already exists");
        }
    }

    public async unsubscribe() {
        HiveResponseBody.validateBody(
            await this.getConnectionManager().getSubscriptionApi()
                        .removeVault()
                        /* .execute()
                        .body() */);
    }

    public async activate() {
        HiveResponseBody.validateBody(
            await this.getConnectionManager().getSubscriptionApi()
                        .unfreeze()
                        /* .execute()
                        .body() */);
    }

    public async deactivate() {
        HiveResponseBody.validateBody(
            await this.getConnectionManager().getSubscriptionApi()
                        .freeze()
                        /* .execute()
                        .body() */);
    }

    public async getVaultInfo(): Promise<VaultInfoResponseBody> {
        return HiveResponseBody.validateBody(
            await this.getConnectionManager().getSubscriptionApi()
                        .getVaultInfo()
                        /* .execute()
                        .body() */);
    }

    public async getBackupVaultInfo(): Promise<VaultInfoResponseBody> {
        return HiveResponseBody.validateBody(
            await this.getConnectionManager().getSubscriptionApi()
                    .getBackupVaultInfo()
                    /* .execute()
                    .body() */);
    }
}
