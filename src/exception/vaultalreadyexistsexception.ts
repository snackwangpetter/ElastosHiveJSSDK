

import { RuntimeException } from "./runtimeexception";

export class VaultAlreadyExistsException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
