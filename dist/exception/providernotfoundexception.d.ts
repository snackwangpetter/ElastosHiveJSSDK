import { RuntimeException } from "./runtimeexception";
export declare class ProviderNotFoundException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
