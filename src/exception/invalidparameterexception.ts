

import { RuntimeException } from "./runtimeexception";

export class InvalidParameterException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
