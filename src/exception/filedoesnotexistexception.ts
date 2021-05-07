

import { RuntimeException } from "./runtimeexception";

export class FileDoesNotExistException extends RuntimeException {
	constructor(message?: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
