import { PricingPlan } from "../../payment/pricingplan";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class PaymentPackageResponseBody extends HiveResponseBody {
    private paymentSettings;
    private version;
    backupPlans: PricingPlan[];
    pricingPlans: PricingPlan[];
    getPaymentSettings(): PaymentPackageResponseBody.PaymentSettings;
    getVersion(): string;
    getBackupPlans(): PricingPlan[];
    getPricingPlans(): PricingPlan[];
}
export declare namespace PaymentPackageResponseBody {
    class PaymentSettings {
        private receivingELAAddress;
        private waitPaymentTimeout;
        private waitTxTimeout;
    }
}
