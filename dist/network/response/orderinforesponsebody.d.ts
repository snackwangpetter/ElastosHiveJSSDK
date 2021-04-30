import { Order } from "../../payment/order";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class OrderInfoResponseBody extends HiveResponseBody {
    private orderInfo;
    getOrderInfo(): Order;
}
