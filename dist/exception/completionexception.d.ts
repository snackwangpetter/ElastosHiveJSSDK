import { RuntimeException } from "./runtimeexception";
export declare class IllegalArgumentException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
