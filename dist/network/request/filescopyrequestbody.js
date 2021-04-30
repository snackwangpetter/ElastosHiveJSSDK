"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesCopyRequestBody = void 0;
const filesmoverequestbody_1 = require("./filesmoverequestbody");
class FilesCopyRequestBody extends filesmoverequestbody_1.FilesMoveRequestBody {
    constructor(srcPath, dstPath) {
        super(srcPath, dstPath);
    }
}
exports.FilesCopyRequestBody = FilesCopyRequestBody;
//# sourceMappingURL=filescopyrequestbody.js.map