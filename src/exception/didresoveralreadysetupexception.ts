import { RuntimeException } from "./runtimeexception";

export class DIDResolverAlreadySetupException extends RuntimeException {
	private static message = "Resolver already settup, replicated setup not allowed";

	constructor(causedBy?: Error) {
		super(DIDResolverAlreadySetupException.message, causedBy);
	}
}
