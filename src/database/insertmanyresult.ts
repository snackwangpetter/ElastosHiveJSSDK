export class InsertManyResult {
	private acknowledged: boolean;
	private insertedIds: string[];

	public isAcknowledged(): boolean {
		return this.acknowledged;
	}

	public setAcknowledged(acknowledged: boolean): InsertManyResult {
		this.acknowledged = acknowledged;
		return this;
	}

	public getInsertedIds(): string[] {
		return this.insertedIds;
	}

	public setInsertedIds(insertedIds: string[]): InsertManyResult {
		this.insertedIds = insertedIds;
		return this;
	}
}
