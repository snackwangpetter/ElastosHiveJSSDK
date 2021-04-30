import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";

/**
 * Helper class for subscription api.
 */
export class SubscriptionServiceRender extends HiveVaultRender {
    public constructor(serviceEndpoint: ServiceEndpoint) {
        super(serviceEndpoint);
    }

    /* public void subscribe() throws IOException {
        VaultCreateResponseBody body = HiveResponseBody.validateBody(
                getConnectionManager().getSubscriptionApi()
                        .createVault()
                        .execute()
                        .body());
        if (Boolean.TRUE.equals(body.getExisting())) {
            throw new VaultAlreadyExistException("The vault already exists");
        }
    }

    public void subscribeBackup() throws IOException {
        VaultCreateResponseBody body = HiveResponseBody.validateBody(
                getConnectionManager().getSubscriptionApi()
                        .createBackupVault()
                        .execute()
                        .body());
        if (Boolean.TRUE.equals(body.getExisting())) {
            throw new VaultAlreadyExistException("The backup vault already exists");
        }
    }

    public void unsubscribe() throws IOException {
        HiveResponseBody.validateBody(
                getConnectionManager().getSubscriptionApi()
                        .removeVault()
                        .execute()
                        .body());
    }

    public void activate() throws IOException {
        HiveResponseBody.validateBody(
                getConnectionManager().getSubscriptionApi()
                        .unfreeze()
                        .execute()
                        .body());
    }

    public void deactivate() throws IOException {
        HiveResponseBody.validateBody(
                getConnectionManager().getSubscriptionApi()
                        .freeze()
                        .execute()
                        .body());
    }

    public VaultInfoResponseBody getVaultInfo() throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getSubscriptionApi()
                        .getVaultInfo()
                        .execute()
                        .body());
    }

    public VaultInfoResponseBody getBackupVaultInfo() throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getSubscriptionApi()
                        .getBackupVaultInfo()
                        .execute()
                        .body());
    } */
}
