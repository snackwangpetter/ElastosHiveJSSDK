import { AppContext } from "./appcontext";
import { Exception, CompletionException, UnsupportedOperationException } from "./exception/exception";
import { Order } from "./payment/order";
import { PricingPlan } from "./payment/pricingplan";
import { Receipt } from "./payment/receipt";
import { PaymentService } from "./service/paymentservice";
import { SubscriptionService } from "./service/subscriptionservice";
import { ServiceEndpoint } from "./serviceendpoint";
import { HttpExceptionHandler } from "./vault/httpexceptionhandler";
import { PaymentServiceRender } from "./vault/paymentservicerender";
import { SubscriptionServiceRender } from "./vault/subscriptionservicerender";

export class VaultSubscription extends ServiceEndpoint implements SubscriptionService<VaultSubscription.VaultInfo>, PaymentService, HttpExceptionHandler {
	private subscriptionService: SubscriptionServiceRender;
	private paymentService: PaymentServiceRender;

	public constructor(context: AppContext, providerAddress: string) {
		super(context, providerAddress);
		this.paymentService = new PaymentServiceRender(this);
		this.subscriptionService = new SubscriptionServiceRender(this);
	}

	public subscribe(pricingPlan: string): Promise<VaultSubscription.VaultInfo> {
		return new Promise((resolve, reject)=>{
			try {
				this.subscriptionService.subscribe();
				//TODO:
				resolve(new VaultSubscription.VaultInfo(null, this.getAppContext().getUserDid(), null));
			} catch (e) {
				reject(new CompletionException(this.convertException(e as Exception)));
			}
		});
	}

	public unsubscribe(): Promise<void> {
		return this.promiseWithConvertedException<void>(async ()=>{
			this.subscriptionService.unsubscribe();
		});
	}

	public activate(): Promise<void> {
		return this.promiseWithConvertedException<void>(async ()=>{
			this.subscriptionService.activate();
		});
	}

	public deactivate(): Promise<void> {
		return this.promiseWithConvertedException<void>(async ()=>{
			this.subscriptionService.deactivate();
		});
	}

	public checkSubscription(): Promise<VaultSubscription.VaultInfo> {
		return this.promiseWithConvertedException<VaultSubscription.VaultInfo>(async ()=>{
			let body = await this.subscriptionService.getVaultInfo();
			return new VaultSubscription.VaultInfo(this.getUserDid(), null, body.getDid())
					.setProvider(this.getProviderAddress())
					.setCreateTime(body.getStartTimeStr())
					.setModifyTime(body.getModifyTimeStr())
					.setMaxSpace(body.getMaxStorage())
					.setDbSpaceUsed(body.getDbUseStorage())
					.setFileSpaceUsed(body.getFileUseStorage())
					.setExisting(body.isExisting());
		});
	}

	public getPricingPlanList(): Promise<PricingPlan[]> {
		return this.promiseWithConvertedException<PricingPlan[]>(async ()=>{
			return this.paymentService.getPricingPlanList();
		});
	}

	public getPricingPlan(planName: string): Promise<PricingPlan> {
		return this.promiseWithConvertedException<PricingPlan>(async ()=>{
			return this.paymentService.getPricingPlan(planName);
		});
	}

	public placeOrder(planName: string): Promise<Order> {
		return this.promiseWithConvertedException<Order>(async ()=>{
			return this.paymentService.getOrderInfo(await this.paymentService.createPricingOrder(planName));
		});
	}

	public getOrder(orderId: string): Promise<Order> {
		return this.promiseWithConvertedException<Order>(async ()=>{
			return this.paymentService.getOrderInfo(orderId);
		});
	}

	public payOrder(orderId: string, transIds: string[]): Promise<Receipt> {
		return this.promiseWithConvertedException<Receipt>(async ()=>{
			this.paymentService.payOrder(orderId, transIds);
			//TODO:
			return new Receipt();
		});
	}

	public getReceipt(receiptId: string): Promise<Receipt> {
		throw new UnsupportedOperationException();
	}
}

export namespace VaultSubscription {
	export class VaultInfo {
		private userDid: string;
		private appInstanceDid: string;
		private appId: string;
		private provider: string;

		private serviceDid: string;
		private pricingUsing: string;
		private createTime: string;
		private modifyTime: string;
		private maxSpace: number;
		private dbSpaceUsed: number;
		private fileSpaceUsed: number;
		private existing: boolean;

		public constructor(appInstanceDid: string, userDid: string, serviceDid: string) {
			this.appInstanceDid = appInstanceDid;
			this.userDid = userDid;
			this.serviceDid = serviceDid;
		}

		public getUserDid(): string {
			return this.userDid;
		}

		public setUserDid(userDid: string): VaultInfo {
			this.userDid = userDid;
			return this;
		}

		public getAppInstanceDid(): string {
			return this.appInstanceDid;
		}

		public setAppInstanceDid(appInstanceDid: string): VaultInfo {
			this.appInstanceDid = appInstanceDid;
			return this;
		}

		public getAppId(): string {
			return this.appId;
		}

		public setAppId(appId: string): VaultInfo {
			this.appId = appId;
			return this;
		}

		public getProvider(): string {
			return this.provider;
		}

		public setProvider(provider: string): VaultInfo {
			this.provider = provider;
			return this;
		}

		public getServiceDid(): string {
			return this.serviceDid;
		}

		public setServiceDid(serviceDid: string): VaultInfo {
			this.serviceDid = serviceDid;
			return this;
		}

		public getPricingUsing(): string {
			return this.pricingUsing;
		}

		public setPricingUsing(pricingUsing: string): VaultInfo {
			this.pricingUsing = pricingUsing;
			return this;
		}

		public getCreateTime(): string {
			return this.createTime;
		}

		public setCreateTime(createTime: string): VaultInfo {
			this.createTime = createTime;
			return this;
		}

		public getModifyTime(): string {
			return this.modifyTime;
		}

		public setModifyTime(modifyTime: string): VaultInfo {
			this.modifyTime = modifyTime;
			return this;
		}

		public getMaxSpace(): number {
			return this.maxSpace;
		}

		public setMaxSpace(maxSpace: number): VaultInfo {
			this.maxSpace = maxSpace;
			return this;
		}

		public getDbSpaceUsed(): number {
			return this.dbSpaceUsed;
		}

		public setDbSpaceUsed(dbSpaceUsed: number): VaultInfo {
			this.dbSpaceUsed = dbSpaceUsed;
			return this;
		}

		public getFileSpaceUsed(): number {
			return this.fileSpaceUsed;
		}

		public setFileSpaceUsed(fileSpaceUsed: number): VaultInfo {
			this.fileSpaceUsed = fileSpaceUsed;
			return this;
		}

		public isExisting(): boolean {
			return this.existing;
		}

		public setExisting(existing: boolean): VaultInfo {
			this.existing = existing;
			return this;
		}
	}
}