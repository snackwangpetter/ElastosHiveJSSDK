"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backup = void 0;
const servicebuilder_1 = require("./backup/servicebuilder");
const serviceendpoint_1 = require("./serviceendpoint");
class Backup extends serviceendpoint_1.ServiceEndpoint {
    constructor(context, providerAddress) {
        super(context, providerAddress);
        this.promotionService = new servicebuilder_1.ServiceBuilder(this).createPromotionService();
    }
    getPromotionService() {
        return this.promotionService;
    }
}
exports.Backup = Backup;
//# sourceMappingURL=backup.js.map