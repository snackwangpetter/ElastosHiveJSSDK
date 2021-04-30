"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPlanResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class PaymentPlanResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getAmount() {
        return this.amount;
    }
    getCurrency() {
        return this.currency;
    }
    getMaxStorage() {
        return this.maxStorage;
    }
    getName() {
        return this.name;
    }
    getServiceDays() {
        return this.serviceDays;
    }
}
exports.PaymentPlanResponseBody = PaymentPlanResponseBody;
//# sourceMappingURL=paymentplanresponsebody.js.map