"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDocRequestBody = void 0;
const createcollectionrequestbody_1 = require("./createcollectionrequestbody");
class CountDocRequestBody extends createcollectionrequestbody_1.CreateCollectionRequestBody {
    constructor(name, filter, options) {
        super(name);
        this.filter = filter;
        this.options = options;
    }
}
exports.CountDocRequestBody = CountDocRequestBody;
//# sourceMappingURL=countdocrequestbody.js.map