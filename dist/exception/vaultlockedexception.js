"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultLockedException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class VaultLockedException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.VaultLockedException = VaultLockedException;
//# sourceMappingURL=vaultlockedexception.js.map