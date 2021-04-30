"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertManyResult = void 0;
class InsertManyResult {
    isAcknowledged() {
        return this.acknowledged;
    }
    setAcknowledged(acknowledged) {
        this.acknowledged = acknowledged;
        return this;
    }
    getInsertedIds() {
        return this.insertedIds;
    }
    setInsertedIds(insertedIds) {
        this.insertedIds = insertedIds;
        return this;
    }
}
exports.InsertManyResult = InsertManyResult;
//# sourceMappingURL=insertmanyresult.js.map