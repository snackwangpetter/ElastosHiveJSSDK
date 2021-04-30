"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOptions = void 0;
class UpdateOptions {
    getUpsert() {
        return this.upsert;
    }
    setUpsert(upsert) {
        this.upsert = upsert;
        return this;
    }
    getBypassDocumentValidation() {
        return this.bypassDocumentValidation;
    }
    setBypassDocumentValidation(bypassDocumentValidation) {
        this.bypassDocumentValidation = bypassDocumentValidation;
        return this;
    }
}
exports.UpdateOptions = UpdateOptions;
//# sourceMappingURL=updateoptions.js.map