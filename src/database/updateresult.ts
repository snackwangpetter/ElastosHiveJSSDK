export class UpdateResult {
	private matchedCount: number;
	private modifiedCount: number;
	private acknowledged: boolean;
	private upsertedId: string;

	public setMatchedCount(matchedCount: number): UpdateResult {
		this.matchedCount = matchedCount;
		return this;
	}

	public setModifiedCount(modifiedCount: number): UpdateResult {
		this.modifiedCount = modifiedCount;
		return this;
	}

	public setAcknowledged(acknowledged: boolean): UpdateResult {
		this.acknowledged = acknowledged;
		return this;
	}

	public setUpsertedId(upsertedId: string): UpdateResult {
		this.upsertedId = upsertedId;
		return this;
	}
}
