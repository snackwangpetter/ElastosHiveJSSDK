"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDocResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class DeleteDocResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getAcknowledged() {
        return this.acknowledged;
    }
    getDeletedCount() {
        return this.deletedCount;
    }
}
exports.DeleteDocResponseBody = DeleteDocResponseBody;
//# sourceMappingURL=deletedocresponsebody.js.map