import { Order } from "../payment/order";
import { PricingPlan } from "../payment/pricingplan";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";
export declare class PaymentServiceRender extends HiveVaultRender {
    constructor(serviceEndpoint: ServiceEndpoint);
    getPricingPlanList(): Promise<PricingPlan[]>;
    getBackupPlanList(): Promise<PricingPlan[]>;
    getPricingPlan(planName: string): Promise<PricingPlan>;
    getBackupPlan(planName: string): Promise<PricingPlan>;
    private getPricePlanByResponseBody;
    createPricingOrder(planName: string): string;
    createBackupOrder(String: any, planName: any): string;
    private createOrder;
    payOrder(orderId: string, transIds: string[]): void;
    getOrderInfo(orderId: string): Promise<Order>;
}
