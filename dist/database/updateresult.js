"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResult = void 0;
class UpdateResult {
    setMatchedCount(matchedCount) {
        this.matchedCount = matchedCount;
        return this;
    }
    setModifiedCount(modifiedCount) {
        this.modifiedCount = modifiedCount;
        return this;
    }
    setAcknowledged(acknowledged) {
        this.acknowledged = acknowledged;
        return this;
    }
    setUpsertedId(upsertedId) {
        this.upsertedId = upsertedId;
        return this;
    }
}
exports.UpdateResult = UpdateResult;
//# sourceMappingURL=updateresult.js.map