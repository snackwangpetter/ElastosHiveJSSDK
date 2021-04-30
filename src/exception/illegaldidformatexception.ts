

import { RuntimeException } from "./runtimeexception";

export class IllegalDidFormatException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
