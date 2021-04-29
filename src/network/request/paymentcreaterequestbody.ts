export class PaymentCreateRequestBody {
    // TODO JAVA @SerializedName("pricing_name")
    private pricingName: string;
    // TODO JAVA @SerializedName("backing_name")
    private backupName: string;

    public constructor(pricingPlanName: string, backupPlanName: string) {
        this.pricingName = pricingPlanName;
        this.backupName = backupPlanName;
    }
}
