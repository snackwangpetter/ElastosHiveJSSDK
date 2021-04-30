"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthToken = void 0;
const logutil_1 = require("../utils/logutil");
class AuthToken {
    constructor(accessToken, expiresTime, tokenType) {
        this.accessToken = accessToken;
        this.expiresTime = expiresTime;
        this.tokenType = tokenType;
    }
    getAccessToken() {
        return this.accessToken;
    }
    getExpiresTime() {
        return this.expiresTime;
    }
    getTokenType() {
        return this.tokenType;
    }
    getCanonicalizedAccessToken() {
        return this.tokenType + " " + this.accessToken;
    }
    isExpired() {
        if (AuthToken.TYPE_BACKUP === this.tokenType) {
            return this.isBackupExpired();
        }
        return new Date().getTime() >= (this.expiresTime * 1000);
    }
    isBackupExpired() {
        try {
            return VerifiableCredential.fromJson(this.accessToken).isExpired();
        }
        catch (e) {
            logutil_1.LogUtil.e(null, "Failed to check backup credential with message:" + e.getMessage());
            return true;
        }
    }
}
exports.AuthToken = AuthToken;
AuthToken.TYPE_TOKEN = "token";
AuthToken.TYPE_BACKUP = "backup";
//# sourceMappingURL=authtoken.js.map