import { RuntimeException } from "./runtimeexception";
export declare class FileDoesNotExistException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
