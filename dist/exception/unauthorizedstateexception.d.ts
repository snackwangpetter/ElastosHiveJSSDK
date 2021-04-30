import { RuntimeException } from "./runtimeexception";
export declare class UnauthorizedStateException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
