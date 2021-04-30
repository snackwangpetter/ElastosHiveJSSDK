"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertDocResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class InsertDocResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getAcknowledged() {
        return this.acknowledged;
    }
    getInsertedId() {
        return this.insertedId;
    }
}
exports.InsertDocResponseBody = InsertDocResponseBody;
//# sourceMappingURL=insertdocresponsebody.js.map