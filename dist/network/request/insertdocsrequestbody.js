"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertDocsRequestBody = void 0;
const createcollectionrequestbody_1 = require("./createcollectionrequestbody");
class InsertDocsRequestBody extends createcollectionrequestbody_1.CreateCollectionRequestBody {
    constructor(name, documents, options) {
        super(name);
        this.documents = documents;
        this.options = options;
    }
}
exports.InsertDocsRequestBody = InsertDocsRequestBody;
//# sourceMappingURL=insertdocsrequestbody.js.map