"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionServiceRender = void 0;
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const hivevaultrender_1 = require("./hivevaultrender");
class SubscriptionServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(serviceEndpoint) {
        super(serviceEndpoint);
    }
    subscribe() {
        let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getSubscriptionApi()
            .createVault()
            .execute()
            .body());
        if (Boolean.TRUE.equals(body.getExisting())) {
            throw new VaultAlreadyExistException("The vault already exists");
        }
    }
    subscribeBackup() {
        let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getSubscriptionApi()
            .createBackupVault()
            .execute()
            .body());
        if (Boolean.TRUE.equals(body.getExisting())) {
            throw new VaultAlreadyExistException("The backup vault already exists");
        }
    }
    unsubscribe() {
        hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getSubscriptionApi()
            .removeVault()
            .execute()
            .body());
    }
    activate() {
        hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getSubscriptionApi()
            .unfreeze()
            .execute()
            .body());
    }
    deactivate() {
        hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getSubscriptionApi()
            .freeze()
            .execute()
            .body());
    }
    getVaultInfo() {
        return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getSubscriptionApi()
            .getVaultInfo()
            .execute()
            .body());
    }
    getBackupVaultInfo() {
        return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getSubscriptionApi()
            .getBackupVaultInfo()
            .execute()
            .body());
    }
}
exports.SubscriptionServiceRender = SubscriptionServiceRender;
//# sourceMappingURL=subscriptionservicerender.js.map