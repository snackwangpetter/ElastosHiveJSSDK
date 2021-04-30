"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCommitHashResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class NodeCommitHashResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getCommitHash() {
        return this.commitHash;
    }
}
exports.NodeCommitHashResponseBody = NodeCommitHashResponseBody;
//# sourceMappingURL=nodecommithashresponsebody.js.map