"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPackageResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class PaymentPackageResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getPaymentSettings() {
        return this.paymentSettings;
    }
    getVersion() {
        return this.version;
    }
    getBackupPlans() {
        return this.backupPlans;
    }
    getPricingPlans() {
        return this.pricingPlans;
    }
}
exports.PaymentPackageResponseBody = PaymentPackageResponseBody;
(function (PaymentPackageResponseBody) {
    class PaymentSettings {
    }
    PaymentPackageResponseBody.PaymentSettings = PaymentSettings;
})(PaymentPackageResponseBody = exports.PaymentPackageResponseBody || (exports.PaymentPackageResponseBody = {}));
//# sourceMappingURL=paymentpackageresponsebody.js.map