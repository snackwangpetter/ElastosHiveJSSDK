

import { RuntimeException } from "./runtimeexception";

export class IllegalArgumentException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
