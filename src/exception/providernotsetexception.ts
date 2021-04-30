

import { RuntimeException } from "./runtimeexception";

export class ProviderNotSetException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
