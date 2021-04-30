import { RuntimeException } from "./runtimeexception";
export declare class DIDResolverAlreadySetupException extends RuntimeException {
    private static message;
    constructor(causedBy?: Error);
}
