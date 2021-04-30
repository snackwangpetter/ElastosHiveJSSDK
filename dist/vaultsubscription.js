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
exports.VaultSubscription = void 0;
const illegalargumentexception_1 = require("./exception/illegalargumentexception");
const receipt_1 = require("./payment/receipt");
const serviceendpoint_1 = require("./serviceendpoint");
const paymentservicerender_1 = require("./vault/paymentservicerender");
const subscriptionservicerender_1 = require("./vault/subscriptionservicerender");
class VaultSubscription extends serviceendpoint_1.ServiceEndpoint {
    constructor(context, providerAddress) {
        super(context, providerAddress);
        this.paymentService = new paymentservicerender_1.PaymentServiceRender(this);
        this.subscriptionService = new subscriptionservicerender_1.SubscriptionServiceRender(this);
    }
    subscribe(pricingPlan) {
        return new Promise((resolve, reject) => {
            try {
                this.subscriptionService.subscribe();
                resolve(new VaultSubscription.VaultInfo(null, this.getAppContext().getUserDid(), null));
            }
            catch (e) {
                reject(new illegalargumentexception_1.CompletionException(this.convertException(e)));
            }
        });
    }
    unsubscribe() {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            this.subscriptionService.unsubscribe();
        }));
    }
    activate() {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            this.subscriptionService.activate();
        }));
    }
    deactivate() {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            this.subscriptionService.deactivate();
        }));
    }
    checkSubscription() {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            let body = this.subscriptionService.getVaultInfo();
            return new VaultSubscription.VaultInfo(this.getUserDid(), null, body.getDid())
                .setProvider(this.getProviderAddress())
                .setCreateTime(body.getStartTimeStr())
                .setModifyTime(body.getModifyTimeStr())
                .setMaxSpace(body.getMaxStorage())
                .setDbSpaceUsed(body.getDbUseStorage())
                .setFileSpaceUsed(body.getFileUseStorage())
                .setExisting(body.isExisting());
        }));
    }
    getPricingPlanList() {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            return this.paymentService.getPricingPlanList();
        }));
    }
    getPricingPlan(planName) {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            return this.paymentService.getPricingPlan(planName);
        }));
    }
    placeOrder(planName) {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            return this.paymentService.getOrderInfo(this.paymentService.createPricingOrder(planName));
        }));
    }
    getOrder(orderId) {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            return this.paymentService.getOrderInfo(orderId);
        }));
    }
    payOrder(orderId, transIds) {
        return this.promiseWithConvertedException(() => __awaiter(this, void 0, void 0, function* () {
            this.paymentService.payOrder(orderId, transIds);
            return new receipt_1.Receipt();
        }));
    }
    getReceipt(receiptId) {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
}
exports.VaultSubscription = VaultSubscription;
(function (VaultSubscription) {
    class VaultInfo {
        constructor(appInstanceDid, userDid, serviceDid) {
            this.appInstanceDid = appInstanceDid;
            this.userDid = userDid;
            this.serviceDid = serviceDid;
        }
        getUserDid() {
            return this.userDid;
        }
        setUserDid(userDid) {
            this.userDid = userDid;
            return this;
        }
        getAppInstanceDid() {
            return this.appInstanceDid;
        }
        setAppInstanceDid(appInstanceDid) {
            this.appInstanceDid = appInstanceDid;
            return this;
        }
        getAppId() {
            return this.appId;
        }
        setAppId(appId) {
            this.appId = appId;
            return this;
        }
        getProvider() {
            return this.provider;
        }
        setProvider(provider) {
            this.provider = provider;
            return this;
        }
        getServiceDid() {
            return this.serviceDid;
        }
        setServiceDid(serviceDid) {
            this.serviceDid = serviceDid;
            return this;
        }
        getPricingUsing() {
            return this.pricingUsing;
        }
        setPricingUsing(pricingUsing) {
            this.pricingUsing = pricingUsing;
            return this;
        }
        getCreateTime() {
            return this.createTime;
        }
        setCreateTime(createTime) {
            this.createTime = createTime;
            return this;
        }
        getModifyTime() {
            return this.modifyTime;
        }
        setModifyTime(modifyTime) {
            this.modifyTime = modifyTime;
            return this;
        }
        getMaxSpace() {
            return this.maxSpace;
        }
        setMaxSpace(maxSpace) {
            this.maxSpace = maxSpace;
            return this;
        }
        getDbSpaceUsed() {
            return this.dbSpaceUsed;
        }
        setDbSpaceUsed(dbSpaceUsed) {
            this.dbSpaceUsed = dbSpaceUsed;
            return this;
        }
        getFileSpaceUsed() {
            return this.fileSpaceUsed;
        }
        setFileSpaceUsed(fileSpaceUsed) {
            this.fileSpaceUsed = fileSpaceUsed;
            return this;
        }
        isExisting() {
            return this.existing;
        }
        setExisting(existing) {
            this.existing = existing;
            return this;
        }
    }
    VaultSubscription.VaultInfo = VaultInfo;
})(VaultSubscription = exports.VaultSubscription || (exports.VaultSubscription = {}));
//# sourceMappingURL=vaultsubscription.js.map