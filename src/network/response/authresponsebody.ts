import { HiveResponseBody } from "./hiveresponsebody";

export class AuthResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("access_token")
    private token: string;

    public getToken(): string {
        return this.token;
    }
}
