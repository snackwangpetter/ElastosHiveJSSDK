"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInResponseBody = void 0;
const hivesdkexception_1 = require("../../exception/hivesdkexception");
const jwtutil_1 = require("../../utils/jwtutil");
const hiveresponsebody_1 = require("./hiveresponsebody");
class SignInResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getChallenge() {
        return this.challenge;
    }
    checkValid(validAudience) {
        let claims = jwtutil_1.JwtUtil.getBody(this.challenge);
        if (claims.getExpiration().getTime() <= new Date().getTime())
            throw new hivesdkexception_1.HiveSdkException("Bad jwt expiration date");
        if (!claims.getAudience().equals(validAudience))
            throw new hivesdkexception_1.HiveSdkException("Bad jwt audience value");
        return claims;
    }
}
exports.SignInResponseBody = SignInResponseBody;
//# sourceMappingURL=signinresponsebody.js.map