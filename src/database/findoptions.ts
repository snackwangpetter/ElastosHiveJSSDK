export class FindOptions {
	private projection: Map<string, any> ;
	private skip: number;
	private sort: FindOptions.FieldEntry[];
	// TODO JAVA @SerializedName("allow_partial_results")
	private allowPartialResults: boolean;
	// TODO JAVA @SerializedName("batch_size")
	private batchSize: number;
	// TODO JAVA @SerializedName("return_key")
	private returnKey: boolean;
	// TODO JAVA @SerializedName("show_record_id")
	private showRecordId: boolean;

	public setProjection(projection: Map<string, any> ): FindOptions {
		this.projection = projection;
		return this;
	}

	public setSkip(skip: number) {
		this.skip = skip;
		return this;
	}

	public setSort(sort: FindOptions.FieldEntry[]): FindOptions {
		this.sort = sort;
		return this;
	}

	public setAllowPartialResults(allowPartialResults: boolean): FindOptions {
		this.allowPartialResults = allowPartialResults;
		return this;
	}

	public setBatchSize(batchSize: number): FindOptions {
		this.batchSize = batchSize;
		return this;
	}

	public setReturnKey(returnKey: boolean): FindOptions {
		this.returnKey = returnKey;
		return this;
	}

	public setShowRecordId(showRecordId: boolean): FindOptions {
		this.showRecordId = showRecordId;
		return this;
	}
}

export namespace FindOptions {
	export class FieldEntry extends Map<string, any> {
		public FieldEntry(field: string, value: any) {
			super.set(field, value);
		}
	}
}