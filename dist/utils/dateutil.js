"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
class DateUtil {
    static getCurrentEpochTimeStamp(timeStamp) {
        return dayjs_1.default(timeStamp).format("yyyy-MM-dd HH:mm:ss.SSSSSS");
    }
}
exports.DateUtil = DateUtil;
//# sourceMappingURL=dateutil.js.map