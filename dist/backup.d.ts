import { AppContext } from "./appcontext";
import { PromotionService } from "./service/promotionservice";
import { ServiceEndpoint } from "./serviceendpoint";
export declare class Backup extends ServiceEndpoint {
    private promotionService;
    constructor(context: AppContext, providerAddress: string);
    getPromotionService(): PromotionService;
}
