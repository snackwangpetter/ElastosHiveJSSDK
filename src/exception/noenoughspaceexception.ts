

import { RuntimeException } from "./runtimeexception";

export class NoEnoughSpaceException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
