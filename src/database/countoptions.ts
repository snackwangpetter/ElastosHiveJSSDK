export class CountOptions {
	private skip: number;
	private limit: number;
	private maxTimeMS: number;

	public setSkip(skip: number): CountOptions {
		this.skip = skip;
		return this;
	}

	public setLimit(limit: number): CountOptions {
		this.limit = limit;
		return this;
	}

	public setMaxTimeMS(maxTimeMS: number): CountOptions {
		this.maxTimeMS = maxTimeMS;
		return this;
	}
}
