import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";

/**
 * Helper class for vault/backup subscription.
 */
export class PaymentServiceRender extends HiveVaultRender {
    public constructor(serviceEndpoint: ServiceEndpoint) {
        super(serviceEndpoint);
    }

    /* public List<PricingPlan> getPricingPlanList() throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getPaymentApi()
                        .getPackageInfo()
                        .execute()
                        .body()).getPricingPlans();
    }

    public List<PricingPlan> getBackupPlanList() throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getPaymentApi()
                        .getPackageInfo()
                        .execute()
                        .body()).getBackupPlans();
    }

    public PricingPlan getPricingPlan(String planName) throws IOException {
        return getPricePlanByResponseBody(HiveResponseBody.validateBody(
                getConnectionManager().getPaymentApi()
                        .getPricingPlan(planName)
                        .execute()
                        .body()));
    }

    public PricingPlan getBackupPlan(String planName) throws IOException {
        return getPricePlanByResponseBody(HiveResponseBody.validateBody(
                getConnectionManager().getPaymentApi()
                        .getBackupPlan(planName)
                        .execute()
                        .body()));
    }

    private PricingPlan getPricePlanByResponseBody(PaymentPlanResponseBody respBody) {
        return new PricingPlan().setAmount(respBody.getAmount())
                .setCurrency(respBody.getCurrency())
                .setServiceDays(respBody.getServiceDays())
                .setMaxStorage(respBody.getMaxStorage())
                .setName(respBody.getName());
    }

    public String createPricingOrder(String planName) throws IOException {
        return createOrder(planName, null);
    }

    public String createBackupOrder(String planName) throws IOException {
        return createOrder(null, planName);
    }

    private String createOrder(String pricingPlanName, String backupPlanName) throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getPaymentApi()
                        .createOrder(new PaymentCreateRequestBody(pricingPlanName, backupPlanName))
                        .execute()
                        .body()).getOrderId();
    }

    public void payOrder(String orderId, List<String> transIds) throws IOException {
        HiveResponseBody.validateBody(
                getConnectionManager().getPaymentApi()
                        .payOrder(new PayOrderRequestBody()
                                .setOrderId(orderId)
                                .setPayTxids(transIds))
                        .execute()
                        .body());
    }

    public Order getOrderInfo(String orderId) throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getPaymentApi()
                        .getOrderInfo(orderId)
                        .execute()
                        .body()).getOrderInfo();
    } */
}
