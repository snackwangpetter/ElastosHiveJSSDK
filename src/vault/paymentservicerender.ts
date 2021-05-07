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

    public async getPricingPlanList(): Promise<PricingPlan[]> {
        return HiveResponseBody.validateBody(
                await this.getConnectionManager().getPaymentApi()
                        .getPackageInfo()
                        /* .execute()
                        .body() */).getPricingPlans();
    }

    public async getBackupPlanList(): Promise<PricingPlan[]> {
        return HiveResponseBody.validateBody(
                await this.getConnectionManager().getPaymentApi()
                        .getPackageInfo()
                        /* .execute()
                        .body() */).getBackupPlans();
    }

    public async getPricingPlan(planName: string): Promise<PricingPlan> {
        return this.getPricePlanByResponseBody(HiveResponseBody.validateBody(
                await this.getConnectionManager().getPaymentApi()
                        .getPricingPlan(planName)
                        /* .execute()
                        .body() */));
    }

    public async getBackupPlan(planName: string): Promise<PricingPlan> {
        return this.getPricePlanByResponseBody(HiveResponseBody.validateBody(
                await this.getConnectionManager().getPaymentApi()
                        .getBackupPlan(planName)
                        /* .execute()
                        .body() */));
    }

    private getPricePlanByResponseBody(respBody: PaymentPlanResponseBody): PricingPlan {
        return new PricingPlan().setAmount(respBody.getAmount())
                .setCurrency(respBody.getCurrency())
                .setServiceDays(respBody.getServiceDays())
                .setMaxStorage(respBody.getMaxStorage())
                .setName(respBody.getName());
    }

    public createPricingOrder(planName: string): Promise<string> {
        return this.createOrder(planName, null);
    }

    public createBackupOrder(planName: string): Promise<string> {
        return this.createOrder(null, planName);
    }

    private async createOrder(pricingPlanName: string, backupPlanName: string): Promise<string> {
        return HiveResponseBody.validateBody(
                await this.getConnectionManager().getPaymentApi()
                        .createOrder(new PaymentCreateRequestBody(pricingPlanName, backupPlanName))
                        /* .execute()
                        .body() */).getOrderId();
    }

    public async payOrder(orderId: string, transIds: string[]) {
        HiveResponseBody.validateBody(
                await this.getConnectionManager().getPaymentApi()
                        .payOrder(new PayOrderRequestBody()
                                .setOrderId(orderId)
                                .setPayTxids(transIds))
                        /* .execute()
                        .body() */);
    }

    public async getOrderInfo(orderId: string): Promise<Order> {
        return HiveResponseBody.validateBody(
                await this.getConnectionManager().getPaymentApi()
                        .getOrderInfo(orderId)
                        /* .execute()
                        .body() */).getOrderInfo();
    }
}
