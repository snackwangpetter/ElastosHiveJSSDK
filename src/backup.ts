import { ServiceEndpoint } from "./serviceendpoint";

export class Backup extends ServiceEndpoint {
	private promotionService: PromotionService;

	public Backup(context: AppContext, providerAddress: string) {
		super(context, providerAddress);
		this.promotionService = new ServiceBuilder(this).createPromotionService();
	}

	public getPromotionService(): PromotionService {
		return this.promotionService;
	}
}
