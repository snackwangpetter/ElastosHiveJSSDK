"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeManageServiceRender = void 0;
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const hivevaultrender_1 = require("./hivevaultrender");
class NodeManageServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(vault) {
        super(vault);
    }
    getVersion() {
        return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getNodeManagerApi()
            .version()
            .execute()
            .body()).getVersion();
    }
    getCommitHash() {
        return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getNodeManagerApi()
            .commitHash()
            .execute()
            .body()).getCommitHash();
    }
}
exports.NodeManageServiceRender = NodeManageServiceRender;
//# sourceMappingURL=nodemanageservicerender.js.map