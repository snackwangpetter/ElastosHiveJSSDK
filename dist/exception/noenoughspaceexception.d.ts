import { RuntimeException } from "./runtimeexception";
export declare class NoEnoughSpaceException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
