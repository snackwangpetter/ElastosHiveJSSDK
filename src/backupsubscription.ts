import { AppContext } from "./appcontext";
import { UnsupportedOperationException } from "./exception/illegalargumentexception";
import { CompletionException } from "./exception/unsupportedoperationexception";
import { VaultInfoResponseBody } from "./network/response/vaultinforesponsebody";
import { Order } from "./payment/order";
import { PricingPlan } from "./payment/pricingplan";
import { Receipt } from "./payment/receipt";
import { PaymentService } from "./service/paymentservice";
import { SubscriptionService } from "./service/subscriptionservice";
import { ServiceEndpoint } from "./serviceendpoint";
import { HttpExceptionHandler } from "./vault/httpexceptionhandler";
import { PaymentServiceRender } from "./vault/paymentservicerender";
import { SubscriptionServiceRender } from "./vault/subscriptionservicerender";

export class BackupSubscription extends ServiceEndpoint implements SubscriptionService<BackupSubscription.BackupInfo>, PaymentService {
	private subscriptionService: SubscriptionServiceRender;
	private paymentService: PaymentServiceRender;

	public constructor(context: AppContext, providerAddress: string) {
		super(context, providerAddress);
		this.paymentService = new PaymentServiceRender(this);
		this.subscriptionService = new SubscriptionServiceRender(this);
	}

	public subscribe(pricingPlan: string): Promise<BackupSubscription.BackupInfo> {
		return this.promiseWithConvertedException<BackupSubscription.BackupInfo>(async ()=>{
			await this.subscriptionService.subscribeBackup();
			return this.getBackupInfoByResponseBody(this.subscriptionService.getBackupVaultInfo());
		});
	}

	private getBackupInfoByResponseBody(body: VaultInfoResponseBody): BackupSubscription.BackupInfo {
		return new BackupSubscription.BackupInfo().setDid(body.getDid())
				.setMaxStorage(body.getMaxStorage())
				.setFileUseStorage(body.getFileUseStorage())
				.setDbUseStorage(body.getDbUseStorage())
				.setModifyTime(body.getModifyTimeStr())
				.setStartTime(body.getStartTimeStr())
				.setEndTime(body.getEndTimeStr())
				.setPricingUsing(body.getPricingUsing())
				.setIsExisting(body.isExisting());
	}

	public unsubscribe(): Promise<void> {
		throw new UnsupportedOperationException();
	}

	public activate(): Promise<void> {
		throw new UnsupportedOperationException();
	}

	public deactivate(): Promise<void> {
		throw new UnsupportedOperationException();
	}

	public checkSubscription(): Promise<BackupSubscription.BackupInfo> {
		return this.promiseWithConvertedException<BackupSubscription.BackupInfo>(async ()=>{
			return this.getBackupInfoByResponseBody(this.subscriptionService.getBackupVaultInfo());
		});
	}

	public getPricingPlanList(): Promise<PricingPlan[]> {
		return this.promiseWithConvertedException<PricingPlan[]>(()=>{
			return this.paymentService.getBackupPlanList();
		});
	}

	public getPricingPlan(planName: string): Promise<PricingPlan> {
		return this.promiseWithConvertedException<PricingPlan>(()=>{
			return this.paymentService.getBackupPlan(planName);
		});
	}

	public placeOrder(planName: string): Promise<Order> {
		return this.promiseWithConvertedException<Order>(()=>{
			return this.paymentService.getOrderInfo(this.paymentService.createBackupOrder(planName));
		});
	}

	public getOrder(orderId: string): Promise<Order> {
		return this.promiseWithConvertedException<Order>(()=>{
			return this.paymentService.getOrderInfo(orderId);
		});
	}

	public payOrder(orderId: string, transIds: string[]): Promise<Receipt> {
		return this.promiseWithConvertedException<Receipt>(()=>{
			this.paymentService.payOrder(orderId, transIds);
			//TODO:
			return null;
		});
	}

	public getReceipt(receiptId: string): Promise<Receipt> {
		throw new UnsupportedOperationException();
	}
}

export namespace BackupSubscription {
	export class BackupInfo {
		private did: string;
		private maxStorage: number;
		private fileUseStorage: number;
		private dbUseStorage: number;
		private modifyTime: string;
		private startTime: string;
		private endTime: string;
		private pricingUsing: string;
		private isExisting: boolean;

		public getDid(): string {
			return this.did;
		}

		public setDid(did: string): BackupInfo {
			this.did = did;
			return this;
		}

		public getMaxStorage(): number {
			return this.maxStorage;
		}

		public setMaxStorage(maxStorage: number): BackupInfo {
			this.maxStorage = maxStorage;
			return this;
		}

		public getFileUseStorage(): number {
			return this.fileUseStorage;
		}

		public setFileUseStorage(fileUseStorage: number): BackupInfo {
			this.fileUseStorage = fileUseStorage;
			return this;
		}

		public getDbUseStorage(): number {
			return this.dbUseStorage;
		}

		public setDbUseStorage(dbUseStorage: number): BackupInfo {
			this.dbUseStorage = dbUseStorage;
			return this;
		}

		public getModifyTime(): string {
			return this.modifyTime;
		}

		public setModifyTime(modifyTime: string): BackupInfo {
			this.modifyTime = modifyTime;
			return this;
		}

		public getStartTime(): string {
			return this.startTime;
		}

		public setStartTime(startTime: string): BackupInfo {
			this.startTime = startTime;
			return this;
		}

		public getEndTime(): string {
			return this.endTime;
		}

		public setEndTime(endTime: string): BackupInfo {
			this.endTime = endTime;
			return this;
		}

		public getPricingUsing(): string {
			return this.pricingUsing;
		}

		public setPricingUsing(pricingUsing: string): BackupInfo {
			this.pricingUsing = pricingUsing;
			return this;
		}

		public getIsExisting(): boolean {
			return this.isExisting;
		}

		public setIsExisting(isExisting: boolean): BackupInfo {
			this.isExisting = isExisting;
			return this;
		}
	}
}