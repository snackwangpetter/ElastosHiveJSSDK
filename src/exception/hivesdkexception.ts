

import { RuntimeException } from "./runtimeexception";

export class HiveSdkException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
