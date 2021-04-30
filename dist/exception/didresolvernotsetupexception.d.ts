import { RuntimeException } from "./runtimeexception";
export declare class DIDResolverNotSetupException extends RuntimeException {
    private static message;
    constructor(causedBy?: Error);
}
