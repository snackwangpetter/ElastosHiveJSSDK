import { HiveResponseBody } from "./hiveresponsebody";

export class SignInResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("challenge")
    private challenge: string;

    public getChallenge(): string {
        return this.challenge;
    }

    public checkValid(validAudience: string): Claims {
        let claims = JwtUtil.getBody(challenge);

        if (claims.getExpiration().getTime() <= System.currentTimeMillis() )
            throw new HiveSdkException("Bad jwt expiration date");

        if (!claims.getAudience().equals(validAudience))
            throw new HiveSdkException("Bad jwt audience value");

        return claims;
    }
}
