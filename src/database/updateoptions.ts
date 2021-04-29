export class UpdateOptions {
	private upsert: boolean;
	// TODO JAVA @SerializedName("bypass_document_validation")
	private bypassDocumentValidation: boolean;

	public getUpsert(): boolean {
		return this.upsert;
	}

	public setUpsert(upsert: boolean): UpdateOptions {
		this.upsert = upsert;
		return this;
	}

	public getBypassDocumentValidation(): boolean {
		return this.bypassDocumentValidation;
	}

	public setBypassDocumentValidation(bypassDocumentValidation: boolean): UpdateOptions {
		this.bypassDocumentValidation = bypassDocumentValidation;
		return this;
	}
}
