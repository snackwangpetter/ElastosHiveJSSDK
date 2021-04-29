import { HiveResponseBody } from "./hiveresponsebody";

export class PaymentCreateResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("order_id")
    private orderId: string;

    public getOrderId(): string {
        return this.orderId;
    }
}
