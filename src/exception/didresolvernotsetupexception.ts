import { RuntimeException } from "./runtimeexception";

export class DIDResolverNotSetupException extends RuntimeException {
	private static message = "DID Resolver has not been setup before";

	constructor(causedBy?: Error) {
		super(DIDResolverNotSetupException.message, causedBy)
	}
}