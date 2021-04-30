"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveBackupContext = void 0;
class HiveBackupContext {
    getParameter(parameter) {
        switch (parameter) {
            case "targetAddress":
                return this.getTargetProviderAddress();
            case "targetServiceDid":
                return this.getTargetServiceDid();
        }
        return null;
    }
}
exports.HiveBackupContext = HiveBackupContext;
//# sourceMappingURL=hivebackupcontext.js.map