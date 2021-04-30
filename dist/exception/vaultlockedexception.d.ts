import { RuntimeException } from "./runtimeexception";
export declare class VaultLockedException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
