

import { RuntimeException } from "./runtimeexception";

export class CompletionException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
