export class InsertOneOptions {
    // TODO JAVA @SerializedName("bypass_document_validation")
    private bypassDocumentValidation: boolean;

    public constructor(bypassDocumentValidation: boolean) {
        this.bypassDocumentValidation = bypassDocumentValidation;
    }
}
