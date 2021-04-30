import { RuntimeException } from "./runtimeexception";
export declare class CompletionException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
