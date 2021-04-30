import { PromotionService } from "../service/promotionservice";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "../vault/hivevaultrender";
export declare class PromotionServiceRender extends HiveVaultRender implements PromotionService {
    constructor(serviceEndpoint: ServiceEndpoint);
    promote(): Promise<void>;
}
