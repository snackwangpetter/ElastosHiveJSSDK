"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedOperationException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class UnsupportedOperationException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.UnsupportedOperationException = UnsupportedOperationException;
//# sourceMappingURL=illegalargumentexception.js.map