import { CompletionException } from "../exception/unsupportedoperationexception";
import { EmptyRequestBody } from "../network/request/emptyrequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { PromotionService } from "../service/promotionservice";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "../vault/hivevaultrender";

export class PromotionServiceRender extends HiveVaultRender implements PromotionService {
	constructor(serviceEndpoint: ServiceEndpoint) {
		super(serviceEndpoint);
	}

	public promote(): Promise<void> {
		return new Promise((resolve, reject)=>{
			try {
				HiveResponseBody.validateBody(
						this.getConnectionManager().getBackupApi()
								.activeToVault(new EmptyRequestBody())
								.execute()
								.body());
				resolve();
			} catch (e) {
				reject(new CompletionException(this.convertException(e)));
			}
		});
	}
}
