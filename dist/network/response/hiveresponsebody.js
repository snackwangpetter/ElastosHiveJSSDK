"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveResponseBody = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const hiveexception_1 = require("../../exception/hiveexception");
const hivesdkexception_1 = require("../../exception/hivesdkexception");
const httpfailedexception_1 = require("../../exception/httpfailedexception");
class HiveResponseBody {
    failed() {
        return HiveResponseBody.SUCCESS !== this.status;
    }
    static validateBody(body) {
        if (body == null)
            throw new hivesdkexception_1.HiveSdkException("Failed to get response body(null)");
        if (body.failed())
            throw new httpfailedexception_1.HttpFailedException(600, this.getHttpErrorMessages().get(600));
        return body;
    }
    static convertException(e) {
        if (e instanceof httpfailedexception_1.HttpFailedException) {
            let ex = e;
            return this.getHttpExceptionByCode(ex.getCode(), ex.getMessage());
        }
        else if (e instanceof IOException)
            return new hiveexception_1.HiveException(e.getMessage());
        else
            return e;
    }
    getDateStrByStamp(value) {
        return dayjs_1.default(value).format(HiveResponseBody.FORMAT_DT);
    }
}
exports.HiveResponseBody = HiveResponseBody;
HiveResponseBody.SUCCESS = "OK";
//# sourceMappingURL=hiveresponsebody.js.map