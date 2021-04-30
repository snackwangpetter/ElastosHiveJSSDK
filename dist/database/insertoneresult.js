"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertOneResult = void 0;
class InsertOneResult {
    isAcknowledged() {
        return this.acknowledged;
    }
    setAcknowledged(acknowledged) {
        this.acknowledged = acknowledged;
        return this;
    }
    getInsertedId() {
        return this.insertedId;
    }
    setInsertedId(insertedId) {
        this.insertedId = insertedId;
        return this;
    }
}
exports.InsertOneResult = InsertOneResult;
//# sourceMappingURL=insertoneresult.js.map