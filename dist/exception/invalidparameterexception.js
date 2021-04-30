"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParameterException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class InvalidParameterException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.InvalidParameterException = InvalidParameterException;
//# sourceMappingURL=invalidparameterexception.js.map