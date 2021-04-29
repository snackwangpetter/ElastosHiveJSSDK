import { PromotionServiceRender } from "./promotionservicerender";

/**
 * Service builder for backup service.
 */
export class ServiceBuilder {
	private backup: Backup;

	public constructor(backup: Backup) {
		this.backup = backup;
	}

	public createPromotionService(): PromotionService {
		return new PromotionServiceRender(this.backup);
	}
}
