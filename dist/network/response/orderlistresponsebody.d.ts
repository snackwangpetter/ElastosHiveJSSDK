import { Order } from "../../payment/order";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class OrderListResponseBody extends HiveResponseBody {
    private orderInfoList;
    getOrderInfoList(): Order[];
}
