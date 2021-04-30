"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalDidFormatException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class IllegalDidFormatException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.IllegalDidFormatException = IllegalDidFormatException;
//# sourceMappingURL=illegaldidformatexception.js.map