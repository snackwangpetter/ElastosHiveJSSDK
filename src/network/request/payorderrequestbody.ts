export class PayOrderRequestBody {
    // TODO JAVA @SerializedName("order_id")
    private orderId: string;
    // TODO JAVA @SerializedName("pay_txids")
    private payTxids: string[];

    public setOrderId(orderId: string): PayOrderRequestBody {
        this.orderId = orderId;
        return this;
    }

    public setPayTxids(payTxids: string[]): PayOrderRequestBody {
        this.payTxids = payTxids;
        return this;
    }
}
