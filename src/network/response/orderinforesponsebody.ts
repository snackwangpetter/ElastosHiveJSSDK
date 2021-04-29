import { HiveResponseBody } from "./hiveresponsebody";

export class OrderInfoResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("order_info")
    private orderInfo: Order;

    public getOrderInfo(): Order {
        return this.orderInfo;
    }
}
