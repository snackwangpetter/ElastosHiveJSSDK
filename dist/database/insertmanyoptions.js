"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertManyOptions = void 0;
const insertoneoptions_1 = require("./insertoneoptions");
class InsertManyOptions extends insertoneoptions_1.InsertOneOptions {
    constructor(bypassDocumentValidation, ordered) {
        super(bypassDocumentValidation);
        this.ordered = ordered;
    }
}
exports.InsertManyOptions = InsertManyOptions;
//# sourceMappingURL=insertmanyoptions.js.map