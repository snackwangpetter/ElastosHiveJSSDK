export class DeleteResult {
	private acknowledged: string;
	private deletedCount: number;

	public getAcknowledged(): string {
		return this.acknowledged;
	}

	public setAcknowledged(acknowledged: string): DeleteResult {
		this.acknowledged = acknowledged;
		return this;
	}

	public getDeletedCount(): number {
		return this.deletedCount;
	}

	public setDeletedCount(deletedCount: number): DeleteResult {
		this.deletedCount = deletedCount;
		return this;
	}
}
