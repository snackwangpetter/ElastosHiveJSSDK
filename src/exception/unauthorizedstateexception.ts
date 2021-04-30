

import { RuntimeException } from "./runtimeexception";

export class UnauthorizedStateException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
