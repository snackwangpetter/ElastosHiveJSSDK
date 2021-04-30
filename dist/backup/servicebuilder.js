"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBuilder = void 0;
const promotionservicerender_1 = require("./promotionservicerender");
class ServiceBuilder {
    constructor(backup) {
        this.backup = backup;
    }
    createPromotionService() {
        return new promotionservicerender_1.PromotionServiceRender(this.backup);
    }
}
exports.ServiceBuilder = ServiceBuilder;
//# sourceMappingURL=servicebuilder.js.map