"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalArgumentException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class IllegalArgumentException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.IllegalArgumentException = IllegalArgumentException;
//# sourceMappingURL=completionexception.js.map