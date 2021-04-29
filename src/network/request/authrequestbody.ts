export class AuthRequestBody {
    // TODO JAVA @SerializedName("jwt")
    private jwt: string;

    public constructor(jwt: string) {
        this.jwt = jwt;
    }
}
