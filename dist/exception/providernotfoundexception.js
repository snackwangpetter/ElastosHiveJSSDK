"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderNotFoundException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class ProviderNotFoundException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.ProviderNotFoundException = ProviderNotFoundException;
//# sourceMappingURL=providernotfoundexception.js.map