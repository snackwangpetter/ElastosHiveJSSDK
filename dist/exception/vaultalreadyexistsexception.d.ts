import { RuntimeException } from "./runtimeexception";
export declare class VaultAlreadyExistsException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
