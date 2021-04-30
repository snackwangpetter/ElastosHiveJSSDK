import { RuntimeException } from "./runtimeexception";
export declare class UnsupportedFileTypeException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
