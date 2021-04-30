import { RuntimeException } from "./runtimeexception";
export declare class ProviderNotSetException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
