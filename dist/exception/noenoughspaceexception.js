"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoEnoughSpaceException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class NoEnoughSpaceException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.NoEnoughSpaceException = NoEnoughSpaceException;
//# sourceMappingURL=noenoughspaceexception.js.map