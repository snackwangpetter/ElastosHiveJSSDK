export class Exception extends Error {
	private causedBy?: Error;

    constructor(message?: string, causedBy?: Error) {
        super(message);
        this.causedBy = causedBy;
        Object.setPrototypeOf(this, new.target.prototype);
    }

    public getMessage(): string {
        return this.message;
    }

    public from(e:any) {
        this.message += (" Caused by " + e.message);

        return this;
    }
}
export class RuntimeException extends Exception {
}
export class DIDResolverSetupException extends Exception {
}
export class DIDResoverAlreadySetupException extends Exception {
}
export class MalformedDIDException extends Exception {
}
export class BackupAlreadyExistsException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class BadContextProviderException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class CompletionException extends RuntimeException {
	constructor(causedBy?: Error) {
		super("Completion error", causedBy);
	}
}
export class DIDResolverNotSetupException extends RuntimeException {
	private static message = "DID Resolver has not been setup before";

	constructor(causedBy?: Error) {
		super(DIDResolverNotSetupException.message, causedBy)
	}
}
export class FileDoesNotExistException extends RuntimeException {
	constructor(message?: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class HiveException extends RuntimeException {
}
export class HiveSdkException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class HttpFailedException extends RuntimeException {
	constructor(private code: number, message: string) {
		super(message);
	}

    public getCode(): number {
        return this.code;
    }
}
export class IllegalArgumentException extends RuntimeException {
	constructor(message?: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class IllegalDidFormatException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class InvalidParameterException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class ProviderNotFoundException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class ProviderNotSetException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class UnauthorizedStateException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class UnsupportedFileTypeException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class UnsupportedOperationException extends RuntimeException {
	constructor(message?: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class VaultAlreadyExistsException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}
export class AuthenticationException extends RuntimeException {
    constructor(causedBy?: Error) {
        super("Authentication error", causedBy);
    }
}
export class VaultLockedException extends RuntimeException {
    constructor(causedBy?: Error) {
        super("Vault is locked", causedBy);
    }
}
export class NoEnoughSpaceException extends RuntimeException {
	constructor(causedBy?: Error) {
		super("Out of space", causedBy);
	}
}
export class IOException extends RuntimeException {
	constructor(message: string, causedBy?: Error) {
		super(message, causedBy);
	}
}

