import { RuntimeException } from "./runtimeexception";
export declare class UnsupportedOperationException extends RuntimeException {
    constructor(message?: string, causedBy?: Error);
}
