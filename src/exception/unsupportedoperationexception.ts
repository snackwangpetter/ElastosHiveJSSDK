

import { RuntimeException } from "./runtimeexception";

export class UnsupportedOperationException extends RuntimeException {
	constructor(message?: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
