"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertDocsResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class InsertDocsResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getAcknowledged() {
        return this.acknowledged;
    }
    getInsertedIds() {
        return this.insertedIds;
    }
}
exports.InsertDocsResponseBody = InsertDocsResponseBody;
//# sourceMappingURL=insertdocsresponsebody.js.map