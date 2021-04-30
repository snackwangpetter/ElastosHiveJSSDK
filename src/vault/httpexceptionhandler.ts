import { Exception } from "../exception/exception";
import { HiveResponseBody } from "../network/response/hiveresponsebody";

export abstract class HttpExceptionHandler {
    /**
     * Common exception conversion for response code.
     * Original exception comes from:
     *  1.class RequestInterceptor when handling response code.
     *  2.other sync/async logic.
     * Every service can override this for defining more specific ones.
     * @param e exception from http calling.
     * @return expect exception already defined.
     */
    convertException(e: Exception) {
        return HiveResponseBody.convertException(e);
    }
}
