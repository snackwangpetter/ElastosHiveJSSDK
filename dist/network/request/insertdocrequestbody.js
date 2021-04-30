"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertDocRequestBody = void 0;
const createcollectionrequestbody_1 = require("./createcollectionrequestbody");
class InsertDocRequestBody extends createcollectionrequestbody_1.CreateCollectionRequestBody {
    constructor(name, document, options) {
        super(name);
        this.document = document;
        this.options = options;
    }
}
exports.InsertDocRequestBody = InsertDocRequestBody;
//# sourceMappingURL=insertdocrequestbody.js.map