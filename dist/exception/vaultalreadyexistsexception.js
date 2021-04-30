"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultAlreadyExistsException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class VaultAlreadyExistsException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.VaultAlreadyExistsException = VaultAlreadyExistsException;
//# sourceMappingURL=vaultalreadyexistsexception.js.map