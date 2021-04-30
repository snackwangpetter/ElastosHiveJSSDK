"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionServiceRender = void 0;
const unsupportedoperationexception_1 = require("../exception/unsupportedoperationexception");
const emptyrequestbody_1 = require("../network/request/emptyrequestbody");
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const hivevaultrender_1 = require("../vault/hivevaultrender");
class PromotionServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(serviceEndpoint) {
        super(serviceEndpoint);
    }
    promote() {
        return new Promise((resolve, reject) => {
            try {
                hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getBackupApi()
                    .activeToVault(new emptyrequestbody_1.EmptyRequestBody())
                    .execute()
                    .body());
                resolve();
            }
            catch (e) {
                reject(new unsupportedoperationexception_1.CompletionException(this.convertException(e)));
            }
        });
    }
}
exports.PromotionServiceRender = PromotionServiceRender;
//# sourceMappingURL=promotionservicerender.js.map