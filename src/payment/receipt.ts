export class Receipt {
	private receiptId: string;
	private orderId: string;
	private customerDid: string;

	private transId: string;
	private transTime: number;
	private transAmount: number;
	private currency: number;

	private createdTime: number;

	public getReceiptId(): string {
		return this.receiptId;
	}

	public getOrderId(): string {
		return this.orderId;
	}

	public getCustomerDid(): string {
		return this.customerDid;
	}

	public getTransId(): string {
		return this.transId;
	}

	public getTransTime(): number {
		return this.transTime;
	}

	public getTransAmount(): number {
		return this.transAmount;
	}

	public getCurrency(): number {
		return this.currency;
	}

	public getCreatedTime(): number {
		return this.createdTime;
	}
}
