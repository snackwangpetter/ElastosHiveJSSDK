

import { RuntimeException } from "./runtimeexception";

export class UnsupportedFileTypeException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
