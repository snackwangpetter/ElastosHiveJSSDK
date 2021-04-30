import { PricingPlan } from "./pricingplan";

export class Order {
	// TODO JAVA @SerializedName("order_id")
	private orderId: string;
	private did: string;
	// TODO JAVA @SerializedName("app_id")
	private appId: string;
	// TODO JAVA @SerializedName("pricing_info")
	private pricingInfo: PricingPlan;
	// TODO JAVA @SerializedName("pay_txids")
	private payTxids: string[];
	private state: string;
	private type: string;
	// TODO JAVA @SerializedName("creat_time")
	private createTime: number;
	// TODO JAVA @SerializedName("finish_time")
	private finishTime: number;

	public getOrderId(): string {
		return this.orderId;
	}

	public getDid(): string {
		return this.did;
	}

	public getAppId(): string {
		return this.appId;
	}

	public getPricingInfo(): PricingPlan {
		return this.pricingInfo;
	}

	public getPayTxids(): string[] {
		return this.payTxids;
	}

	public getState(): string {
		return this.state;
	}

	public getType(): string {
		return this.type;
	}

	public getCreateTime(): number {
		return this.createTime;
	}

	public getFinishTime(): number {
		return this.finishTime;
	}
}
