"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeVersionResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class NodeVersionResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getVersion() {
        return this.version;
    }
}
exports.NodeVersionResponseBody = NodeVersionResponseBody;
//# sourceMappingURL=nodeversionresponsebody.js.map