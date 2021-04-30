import { Order } from "../payment/order";
import { PricingPlan } from "../payment/pricingplan";
import { Receipt } from "../payment/receipt";
export interface PaymentService {
    getPricingPlanList(): Promise<PricingPlan[]>;
    getPricingPlan(planName: string): Promise<PricingPlan>;
    placeOrder(planName: string): Promise<Order>;
    getOrder(orderId: string): Promise<Order>;
    payOrder(orderId: string, transIds: string[]): Promise<Receipt>;
    getReceipt(receiptId: string): Promise<Receipt>;
}
