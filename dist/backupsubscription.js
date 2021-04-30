"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupSubscription = void 0;
const illegalargumentexception_1 = require("./exception/illegalargumentexception");
const serviceendpoint_1 = require("./serviceendpoint");
const paymentservicerender_1 = require("./vault/paymentservicerender");
const subscriptionservicerender_1 = require("./vault/subscriptionservicerender");
class BackupSubscription extends serviceendpoint_1.ServiceEndpoint {
    constructor(context, providerAddress) {
        super(context, providerAddress);
        this.paymentService = new paymentservicerender_1.PaymentServiceRender(this);
        this.subscriptionService = new subscriptionservicerender_1.SubscriptionServiceRender(this);
    }
    subscribe(pricingPlan) {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            yield this.subscriptionService.subscribeBackup();
            return this.getBackupInfoByResponseBody(this.subscriptionService.getBackupVaultInfo());
        }));
    }
    getBackupInfoByResponseBody(body) {
        return new BackupSubscription.BackupInfo().setDid(body.getDid())
            .setMaxStorage(body.getMaxStorage())
            .setFileUseStorage(body.getFileUseStorage())
            .setDbUseStorage(body.getDbUseStorage())
            .setModifyTime(body.getModifyTimeStr())
            .setStartTime(body.getStartTimeStr())
            .setEndTime(body.getEndTimeStr())
            .setPricingUsing(body.getPricingUsing())
            .setIsExisting(body.isExisting());
    }
    unsubscribe() {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
    activate() {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
    deactivate() {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
    checkSubscription() {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            return this.getBackupInfoByResponseBody(this.subscriptionService.getBackupVaultInfo());
        }));
    }
    getPricingPlanList() {
        return this.promiseWithConvertedException(() => {
            return this.paymentService.getBackupPlanList();
        });
    }
    getPricingPlan(planName) {
        return this.promiseWithConvertedException(() => {
            return this.paymentService.getBackupPlan(planName);
        });
    }
    placeOrder(planName) {
        return this.promiseWithConvertedException(() => {
            return this.paymentService.getOrderInfo(this.paymentService.createBackupOrder(planName));
        });
    }
    getOrder(orderId) {
        return this.promiseWithConvertedException(() => {
            return this.paymentService.getOrderInfo(orderId);
        });
    }
    payOrder(orderId, transIds) {
        return this.promiseWithConvertedException(() => {
            this.paymentService.payOrder(orderId, transIds);
            return null;
        });
    }
    getReceipt(receiptId) {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
}
exports.BackupSubscription = BackupSubscription;
(function (BackupSubscription) {
    class BackupInfo {
        getDid() {
            return this.did;
        }
        setDid(did) {
            this.did = did;
            return this;
        }
        getMaxStorage() {
            return this.maxStorage;
        }
        setMaxStorage(maxStorage) {
            this.maxStorage = maxStorage;
            return this;
        }
        getFileUseStorage() {
            return this.fileUseStorage;
        }
        setFileUseStorage(fileUseStorage) {
            this.fileUseStorage = fileUseStorage;
            return this;
        }
        getDbUseStorage() {
            return this.dbUseStorage;
        }
        setDbUseStorage(dbUseStorage) {
            this.dbUseStorage = dbUseStorage;
            return this;
        }
        getModifyTime() {
            return this.modifyTime;
        }
        setModifyTime(modifyTime) {
            this.modifyTime = modifyTime;
            return this;
        }
        getStartTime() {
            return this.startTime;
        }
        setStartTime(startTime) {
            this.startTime = startTime;
            return this;
        }
        getEndTime() {
            return this.endTime;
        }
        setEndTime(endTime) {
            this.endTime = endTime;
            return this;
        }
        getPricingUsing() {
            return this.pricingUsing;
        }
        setPricingUsing(pricingUsing) {
            this.pricingUsing = pricingUsing;
            return this;
        }
        getIsExisting() {
            return this.isExisting;
        }
        setIsExisting(isExisting) {
            this.isExisting = isExisting;
            return this;
        }
    }
    BackupSubscription.BackupInfo = BackupInfo;
})(BackupSubscription = exports.BackupSubscription || (exports.BackupSubscription = {}));
//# sourceMappingURL=backupsubscription.js.map