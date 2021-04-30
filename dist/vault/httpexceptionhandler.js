"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionHandler = void 0;
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
class HttpExceptionHandler {
    convertException(e) {
        return hiveresponsebody_1.HiveResponseBody.convertException(e);
    }
}
exports.HttpExceptionHandler = HttpExceptionHandler;
//# sourceMappingURL=httpexceptionhandler.js.map