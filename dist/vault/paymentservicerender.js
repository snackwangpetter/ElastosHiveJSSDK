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
exports.PaymentServiceRender = void 0;
const paymentcreaterequestbody_1 = require("../network/request/paymentcreaterequestbody");
const payorderrequestbody_1 = require("../network/request/payorderrequestbody");
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const pricingplan_1 = require("../payment/pricingplan");
const hivevaultrender_1 = require("./hivevaultrender");
class PaymentServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(serviceEndpoint) {
        super(serviceEndpoint);
    }
    getPricingPlanList() {
        return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getPaymentApi()
            .getPackageInfo()
            .execute()
            .body()).getPricingPlans();
    }
    getBackupPlanList() {
        return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getPaymentApi()
            .getPackageInfo()
            .execute()
            .body()).getBackupPlans();
    }
    getPricingPlan(planName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getPricePlanByResponseBody(hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getPaymentApi()
                .getPricingPlan(planName)
                .execute()
                .body()));
        });
    }
    getBackupPlan(planName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getPricePlanByResponseBody(hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getPaymentApi()
                .getBackupPlan(planName)
                .execute()
                .body()));
        });
    }
    getPricePlanByResponseBody(respBody) {
        return new pricingplan_1.PricingPlan().setAmount(respBody.getAmount())
            .setCurrency(respBody.getCurrency())
            .setServiceDays(respBody.getServiceDays())
            .setMaxStorage(respBody.getMaxStorage())
            .setName(respBody.getName());
    }
    createPricingOrder(planName) {
        return this.createOrder(planName, null);
    }
    createBackupOrder(String, planName) {
        return this.createOrder(null, planName);
    }
    createOrder(pricingPlanName, backupPlanName) {
        return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getPaymentApi()
            .createOrder(new paymentcreaterequestbody_1.PaymentCreateRequestBody(pricingPlanName, backupPlanName))
            .execute()
            .body()).getOrderId();
    }
    payOrder(orderId, transIds) {
        hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getPaymentApi()
            .payOrder(new payorderrequestbody_1.PayOrderRequestBody()
            .setOrderId(orderId)
            .setPayTxids(transIds))
            .execute()
            .body());
    }
    getOrderInfo(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getPaymentApi()
                .getOrderInfo(orderId)
                .execute()
                .body()).getOrderInfo();
        });
    }
}
exports.PaymentServiceRender = PaymentServiceRender;
//# sourceMappingURL=paymentservicerender.js.map