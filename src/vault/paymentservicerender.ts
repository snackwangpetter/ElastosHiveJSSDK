import { throws } from "node:assert";
import { PaymentCreateRequestBody } from "../network/request/paymentcreaterequestbody";
import { PayOrderRequestBody } from "../network/request/payorderrequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { PaymentPlanResponseBody } from "../network/response/paymentplanresponsebody";
import { Order } from "../payment/order";
import { PricingPlan } from "../payment/pricingplan";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";

/**
 * Helper class for vault/backup subscription.
 */
export class PaymentServiceRender extends HiveVaultRender {
    public constructor(serviceEndpoint: ServiceEndpoint) {
        super(serviceEndpoint);
    }

    public getPricingPlanList(): Promise<PricingPlan[]> {
        return HiveResponseBody.validateBody(
                this.getConnectionManager().getPaymentApi()
                        .getPackageInfo()
                        .execute()
                        .body()).getPricingPlans();
    }

    public getBackupPlanList(): Promise<PricingPlan[]> {
        return HiveResponseBody.validateBody(
                this.getConnectionManager().getPaymentApi()
                        .getPackageInfo()
                        .execute()
                        .body()).getBackupPlans();
    }

    public async getPricingPlan(planName: string): Promise<PricingPlan> {
        return this.getPricePlanByResponseBody(HiveResponseBody.validateBody(
                this.getConnectionManager().getPaymentApi()
                        .getPricingPlan(planName)
                        .execute()
                        .body()));
    }

    public async getBackupPlan(planName: string): Promise<PricingPlan> {
        return this.getPricePlanByResponseBody(HiveResponseBody.validateBody(
                this.getConnectionManager().getPaymentApi()
                        .getBackupPlan(planName)
                        .execute()
                        .body()));
    }

    private getPricePlanByResponseBody(respBody: PaymentPlanResponseBody): PricingPlan {
        return new PricingPlan().setAmount(respBody.getAmount())
                .setCurrency(respBody.getCurrency())
                .setServiceDays(respBody.getServiceDays())
                .setMaxStorage(respBody.getMaxStorage())
                .setName(respBody.getName());
    }

    public createPricingOrder(planName: string): string {
        return this.createOrder(planName, null);
    }

    public createBackupOrder(String planName): string {
        return this.createOrder(null, planName);
    }

    private createOrder(pricingPlanName: string, backupPlanName: string): string {
        return HiveResponseBody.validateBody(
                this.getConnectionManager().getPaymentApi()
                        .createOrder(new PaymentCreateRequestBody(pricingPlanName, backupPlanName))
                        .execute()
                        .body()).getOrderId();
    }

    public payOrder(orderId: string, transIds: string[]) {
        HiveResponseBody.validateBody(
                this.getConnectionManager().getPaymentApi()
                        .payOrder(new PayOrderRequestBody()
                                .setOrderId(orderId)
                                .setPayTxids(transIds))
                        .execute()
                        .body());
    }

    public async getOrderInfo(orderId: string): Promise<Order> {
        return HiveResponseBody.validateBody(
                this.getConnectionManager().getPaymentApi()
                        .getOrderInfo(orderId)
                        .execute()
                        .body()).getOrderInfo();
    }
}
