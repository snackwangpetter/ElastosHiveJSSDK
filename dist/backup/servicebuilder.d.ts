import { Backup } from "../backup";
import { PromotionService } from "../service/promotionservice";
export declare class ServiceBuilder {
    private backup;
    constructor(backup: Backup);
    createPromotionService(): PromotionService;
}
