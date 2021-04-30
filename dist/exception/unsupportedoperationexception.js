"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class CompletionException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.CompletionException = CompletionException;
//# sourceMappingURL=unsupportedoperationexception.js.map