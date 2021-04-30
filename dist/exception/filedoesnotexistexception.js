"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDoesNotExistException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class FileDoesNotExistException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.FileDoesNotExistException = FileDoesNotExistException;
//# sourceMappingURL=filedoesnotexistexception.js.map