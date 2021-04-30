

import { RuntimeException } from "./runtimeexception";

export class BackupAlreadyExistsException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
