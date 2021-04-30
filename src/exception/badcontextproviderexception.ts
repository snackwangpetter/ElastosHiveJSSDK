

import { RuntimeException } from "./runtimeexception";

export class BadContextProviderException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
