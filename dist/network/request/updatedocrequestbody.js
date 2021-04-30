"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocRequestBody = void 0;
const createcollectionrequestbody_1 = require("./createcollectionrequestbody");
class UpdateDocRequestBody extends createcollectionrequestbody_1.CreateCollectionRequestBody {
    constructor(name) {
        super(name);
    }
    setFilter(filter) {
        this.filter = filter;
        return this;
    }
    setUpdate(update) {
        this.update = update;
        return this;
    }
    setOptions(options) {
        this.options = options;
        return this;
    }
}
exports.UpdateDocRequestBody = UpdateDocRequestBody;
//# sourceMappingURL=updatedocrequestbody.js.map