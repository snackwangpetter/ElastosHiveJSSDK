import { RuntimeException } from "./runtimeexception";
export declare class IllegalDidFormatException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
