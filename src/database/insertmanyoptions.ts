import { InsertOneOptions } from "./insertoneoptions";

export class InsertManyOptions extends InsertOneOptions {
	private ordered: boolean;

	public constructor(bypassDocumentValidation: boolean, ordered: boolean) {
		super(bypassDocumentValidation);
		this.ordered = ordered;
	}
}
