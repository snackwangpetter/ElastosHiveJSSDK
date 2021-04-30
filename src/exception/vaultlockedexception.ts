import { RuntimeException } from "./runtimeexception";

/**
 * This exception means vault have no write permission.
 * You need active vault before user it.
 */
export class VaultLockedException extends RuntimeException {
	 constructor(message: string, causedBy?: Error) {
		 super(message, causedBy);
	 }
}
 