//import org.elastos.did.jwt.*;

export class JwtUtil {
    public static getHeader(jwt: string): JwsHeader {
        try {
            let jwtParser = new JwtParserBuilder().build();
            let jws = jwtParser.parseClaimsJws(jwt);
            return jws.getHeader();
        } catch (e) {
            throw new HiveException("Cannot parse jwt token for header.");
        }
    }

    public static getBody(jwt: string): Claims {
        if (jwt == null)
            throw new HiveSdkException("Cannot parse jwt token for body.");

        try {
            let jwtParser = new JwtParserBuilder().build();
            let jws = jwtParser.parseClaimsJws(jwt);
            return jws.getBody();
        } catch (e) {
            throw new HiveSdkException("Cannot parse jwt token for body.");
        }
    }
}
