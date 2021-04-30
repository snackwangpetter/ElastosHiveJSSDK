"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupAlreadyExistsException = void 0;
const runtimeexception_1 = require("./runtimeexception");
class BackupAlreadyExistsException extends runtimeexception_1.RuntimeException {
    constructor(message, causedBy) {
        super(message, causedBy);
    }
}
exports.BackupAlreadyExistsException = BackupAlreadyExistsException;
//# sourceMappingURL=backupalreadyexistsexception.js.map