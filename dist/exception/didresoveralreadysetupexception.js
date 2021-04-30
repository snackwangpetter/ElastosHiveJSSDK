"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIDResolverAlreadySetupException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class DIDResolverAlreadySetupException extends runtimeexception_1.RuntimeException {
    constructor(causedBy) {
        super(DIDResolverAlreadySetupException.message, causedBy);
    }
}
exports.DIDResolverAlreadySetupException = DIDResolverAlreadySetupException;
DIDResolverAlreadySetupException.message = "Resolver already settup, replicated setup not allowed";
//# sourceMappingURL=didresoveralreadysetupexception.js.map