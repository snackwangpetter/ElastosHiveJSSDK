"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackupContext = void 0;
class CloudBackupContext {
    getParameter(parameter) {
        switch (parameter) {
            case "clientId":
                return this.getClientId();
            case "redirectUrl":
                return this.getRedirectUrl();
            case "scope":
                return this.getAppScope();
        }
        return null;
    }
}
exports.CloudBackupContext = CloudBackupContext;
//# sourceMappingURL=cloudbackupcontext.js.map