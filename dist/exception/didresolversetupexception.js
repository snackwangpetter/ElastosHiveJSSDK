"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIDResolverSetupException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class DIDResolverSetupException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.DIDResolverSetupException = DIDResolverSetupException;
//# sourceMappingURL=didresolversetupexception.js.map