import { Exception } from "../exception/exception";
export declare abstract class HttpExceptionHandler {
    convertException(e: Exception): any;
}
