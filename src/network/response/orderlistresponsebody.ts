import { HiveResponseBody } from "./hiveresponsebody";

export class OrderListResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("order_info_list")
    private orderInfoList: Order[];

    public getOrderInfoList(): Order[] {
        return this.orderInfoList;
    }
}
