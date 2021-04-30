"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadContextProviderException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class BadContextProviderException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.BadContextProviderException = BadContextProviderException;
//# sourceMappingURL=badcontextproviderexception.js.map