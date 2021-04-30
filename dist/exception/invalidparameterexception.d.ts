import { RuntimeException } from "./runtimeexception";
export declare class InvalidParameterException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
