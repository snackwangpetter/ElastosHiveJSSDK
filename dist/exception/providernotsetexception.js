"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderNotSetException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class ProviderNotSetException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.ProviderNotSetException = ProviderNotSetException;
//# sourceMappingURL=providernotsetexception.js.map