import { RuntimeException } from "./runtimeexception";
export declare class DIDResolverSetupException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
