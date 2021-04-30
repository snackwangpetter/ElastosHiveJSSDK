"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class PaymentCreateResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getOrderId() {
        return this.orderId;
    }
}
exports.PaymentCreateResponseBody = PaymentCreateResponseBody;
//# sourceMappingURL=paymentcreateresponsebody.js.map