"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindDocRequestBody = void 0;
const createcollectionrequestbody_1 = require("./createcollectionrequestbody");
class FindDocRequestBody extends createcollectionrequestbody_1.CreateCollectionRequestBody {
    constructor(name, filter, options) {
        super(name);
        this.filter = filter;
        this.options = options;
    }
}
exports.FindDocRequestBody = FindDocRequestBody;
//# sourceMappingURL=finddocrequestbody.js.map