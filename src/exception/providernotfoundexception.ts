

import { RuntimeException } from "./runtimeexception";

export class ProviderNotFoundException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
