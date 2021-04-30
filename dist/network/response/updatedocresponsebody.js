"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class UpdateDocResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getAcknowledged() {
        return this.acknowledged;
    }
    getMatchedCount() {
        return this.matchedCount;
    }
    getModifiedCount() {
        return this.modifiedCount;
    }
    getUpsertedId() {
        return this.upsertedId;
    }
}
exports.UpdateDocResponseBody = UpdateDocResponseBody;
//# sourceMappingURL=updatedocresponsebody.js.map