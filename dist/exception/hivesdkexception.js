"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveSdkException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class HiveSdkException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.HiveSdkException = HiveSdkException;
//# sourceMappingURL=hivesdkexception.js.map