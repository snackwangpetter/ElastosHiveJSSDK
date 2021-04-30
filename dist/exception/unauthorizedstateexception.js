"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedStateException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class UnauthorizedStateException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.UnauthorizedStateException = UnauthorizedStateException;
//# sourceMappingURL=unauthorizedstateexception.js.map