import { RuntimeException } from "./runtimeexception";
export declare class BadContextProviderException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
