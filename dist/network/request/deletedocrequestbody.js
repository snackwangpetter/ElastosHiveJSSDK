"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDocRequestBody = void 0;
const createcollectionrequestbody_1 = require("./createcollectionrequestbody");
class DeleteDocRequestBody extends createcollectionrequestbody_1.CreateCollectionRequestBody {
    constructor(name, filter) {
        super(name);
        this.filter = filter;
    }
}
exports.DeleteDocRequestBody = DeleteDocRequestBody;
//# sourceMappingURL=deletedocrequestbody.js.map