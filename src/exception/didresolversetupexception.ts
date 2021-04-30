

import { RuntimeException } from "./runtimeexception";

export class DIDResolverSetupException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
