import { HiveSdkException } from "../../exception/hivesdkexception";
import { JwtUtil } from "../../utils/jwtutil";
import { HiveResponseBody } from "./hiveresponsebody";

export class SignInResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("challenge")
    private challenge: string;

    public getChallenge(): string {
        return this.challenge;
    }

    public checkValid(validAudience: string): Claims {
        let claims = JwtUtil.getBody(this.challenge);

        if (claims.getExpiration().getTime() <= new Date().getTime() )
            throw new HiveSdkException("Bad jwt expiration date");

        if (!claims.getAudience().equals(validAudience))
            throw new HiveSdkException("Bad jwt audience value");

        return claims;
    }
}
