"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesHashResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class FilesHashResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getSha256() {
        return this.sha256;
    }
}
exports.FilesHashResponseBody = FilesHashResponseBody;
//# sourceMappingURL=fileshashresponsebody.js.map