"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedFileTypeException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class UnsupportedFileTypeException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.UnsupportedFileTypeException = UnsupportedFileTypeException;
//# sourceMappingURL=unsupportedfiletypeexception.js.map