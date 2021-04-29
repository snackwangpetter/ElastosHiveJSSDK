import { AppContext } from "./appcontext";
import { ServiceBuilder } from "./backup/servicebuilder";
import { PromotionService } from "./service/promotionservice";
import { ServiceEndpoint } from "./serviceendpoint";

export class Backup extends ServiceEndpoint {
	private promotionService: PromotionService;

	public constructor(context: AppContext, providerAddress: string) {
		super(context, providerAddress);
		this.promotionService = new ServiceBuilder(this).createPromotionService();
	}

	public getPromotionService(): PromotionService {
		return this.promotionService;
	}
}
