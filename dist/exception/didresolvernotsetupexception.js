"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIDResolverNotSetupException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class DIDResolverNotSetupException extends runtimeexception_1.RuntimeException {
    constructor(causedBy) {
        super(DIDResolverNotSetupException.message, causedBy);
    }
}
exports.DIDResolverNotSetupException = DIDResolverNotSetupException;
DIDResolverNotSetupException.message = "DID Resolver has not been setup before";
//# sourceMappingURL=didresolvernotsetupexception.js.map