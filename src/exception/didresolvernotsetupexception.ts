import { RuntimeException } from "./runtimeexception";

export class DIDResolverNotSetupException extends RuntimeException {
	private static message = "DID Resolver has not been setup before";

	constructor(message?: string, causedBy?: Error) {
		super(message, causedBy)
	}
}
