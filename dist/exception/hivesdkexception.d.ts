import { RuntimeException } from "./runtimeexception";
export declare class HiveSdkException extends RuntimeException {
    constructor(message: string, causedBy?: Error);
}
