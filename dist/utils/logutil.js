"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogUtil = void 0;
class LogUtil {
    static d(tag, msg) {
        if (LogUtil.debug) {
            console.log((tag || LogUtil.TAG) + " ==> " + msg);
        }
    }
    static e(tag, msg) {
        if (LogUtil.debug) {
            console.log((tag || LogUtil.ERROR_TAG) + " ==> " + msg);
        }
    }
}
exports.LogUtil = LogUtil;
LogUtil.debug = true;
LogUtil.TAG = "Hive Debug";
LogUtil.ERROR_TAG = "Hive Error";
//# sourceMappingURL=logutil.js.map