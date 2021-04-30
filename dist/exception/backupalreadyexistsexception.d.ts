import { RuntimeException } from "./runtimeexception";
export declare class BackupAlreadyExistsException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
