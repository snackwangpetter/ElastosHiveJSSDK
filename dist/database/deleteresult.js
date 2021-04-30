"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteResult = void 0;
class DeleteResult {
    getAcknowledged() {
        return this.acknowledged;
    }
    setAcknowledged(acknowledged) {
        this.acknowledged = acknowledged;
        return this;
    }
    getDeletedCount() {
        return this.deletedCount;
    }
    setDeletedCount(deletedCount) {
        this.deletedCount = deletedCount;
        return this;
    }
}
exports.DeleteResult = DeleteResult;
//# sourceMappingURL=deleteresult.js.map