"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtUtil = void 0;
class JwtUtil {
    static getHeader(jwt) {
        try {
            let jwtParser = new JwtParserBuilder().build();
            let jws = jwtParser.parseClaimsJws(jwt);
            return jws.getHeader();
        }
        catch (e) {
            throw new HiveException("Cannot parse jwt token for header.");
        }
    }
    static getBody(jwt) {
        if (jwt == null)
            throw new HiveSdkException("Cannot parse jwt token for body.");
        try {
            let jwtParser = new JwtParserBuilder().build();
            let jws = jwtParser.parseClaimsJws(jwt);
            return jws.getBody();
        }
        catch (e) {
            throw new HiveSdkException("Cannot parse jwt token for body.");
        }
    }
}
exports.JwtUtil = JwtUtil;
//# sourceMappingURL=jwtutil.js.map