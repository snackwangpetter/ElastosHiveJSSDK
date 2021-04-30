import { RuntimeException } from "./runtimeexception";
export declare class HttpFailedException extends RuntimeException {
    private code;
    constructor(code: number, message: string);
    getCode(): number;
}
