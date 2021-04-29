export class InsertOneResult {
	private acknowledged: boolean;
	private insertedId: string;

	public isAcknowledged(): boolean {
		return this.acknowledged;
	}

	public setAcknowledged(acknowledged: boolean): InsertOneResult {
		this.acknowledged = acknowledged;
		return this;
	}

	public getInsertedId(): string {
		return this.insertedId;
	}

	public setInsertedId(insertedId: string): InsertOneResult {
		this.insertedId = insertedId;
		return this;
	}
}
