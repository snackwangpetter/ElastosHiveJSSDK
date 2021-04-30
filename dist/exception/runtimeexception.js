"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeException = void 0;
class RuntimeException extends Error {
    constructor(message, causedBy) {
        super(message);
        this.causedBy = causedBy;
        Object.setPrototypeOf(this, new.target.prototype);
    }
    from(e) {
        this.message += (" Caused by " + e.message);
        return this;
    }
}
exports.RuntimeException = RuntimeException;
//# sourceMappingURL=runtimeexception.js.map