"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpFailedException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class HttpFailedException extends runtimeexception_1.RuntimeException {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
    getCode() {
        return this.code;
    }
}
exports.HttpFailedException = HttpFailedException;
//# sourceMappingURL=httpfailedexception.js.map