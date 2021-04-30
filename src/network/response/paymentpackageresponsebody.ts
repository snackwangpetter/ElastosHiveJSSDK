import { PricingPlan } from "../../payment/pricingplan";
import { HiveResponseBody } from "./hiveresponsebody";

export class PaymentPackageResponseBody extends HiveResponseBody {
    private paymentSettings: PaymentPackageResponseBody.PaymentSettings;
    private version: string;
    backupPlans: PricingPlan[];
    pricingPlans: PricingPlan[];

    public getPaymentSettings(): PaymentPackageResponseBody.PaymentSettings {
        return this.paymentSettings;
    }

    public getVersion(): string {
        return this.version;
    }

    public getBackupPlans(): PricingPlan[] {
        return this.backupPlans;
    }

    public getPricingPlans(): PricingPlan[] {
        return this.pricingPlans;
    }
}

export namespace PaymentPackageResponseBody {
    export class PaymentSettings {
        private receivingELAAddress: string;
        //TODO JAVA @SerializedName("wait_payment_timeout")
        private waitPaymentTimeout: string;
        // TODO JAVA @SerializedName("wait_tx_timeout")
        private waitTxTimeout: string;
    }
}