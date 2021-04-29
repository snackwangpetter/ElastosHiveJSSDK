import { AppContextProvider } from "../appcontextprovider";
import { AuthRequestBody } from "../network/request/authrequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";

export class AuthenticationServiceRender extends HiveVaultRender /* TODO JAVA implements HttpExceptionHandler */ {

    private contextProvider: AppContextProvider;

    public constructor(serviceEndpoint: ServiceEndpoint) {
        super(serviceEndpoint);
        this.contextProvider = serviceEndpoint.getAppContext().getAppContextProvider();
    }

    /* public String signIn4Token() throws IOException, ExecutionException, InterruptedException {
        SignInResponseBody rspBody = HiveResponseBody.validateBody(
                getConnectionManager().getAuthApi()
                        .signIn(new SignInRequestBody(new ObjectMapper()
                                .readValue(
                                        contextProvider.getAppInstanceDocument().toString(),
                                        HashMap.class)))
                        .execute()
                        .body());
        rspBody.checkValid(contextProvider.getAppInstanceDocument().getSubject().toString());
        return contextProvider.getAuthorization(rspBody.getChallenge()).get();
    }

    public String signIn4Issuer() throws IOException {
        SignInResponseBody rspBody = getConnectionManager().getAuthApi()
                .signIn(new SignInRequestBody(new ObjectMapper()
                        .readValue(contextProvider.getAppInstanceDocument().toString(), HashMap.class)))
                .execute()
                .body();
        return HiveResponseBody.validateBody(rspBody)
                .checkValid(contextProvider.getAppInstanceDocument().getSubject().toString())
                .getIssuer();
    } */

    public auth(token: string): AuthToken {
        let rspBody = HiveResponseBody.validateBody(
                this.getConnectionManager().getAuthApi()
                        .auth(new AuthRequestBody(token))
                        /* .execute()
                        .body() */);
        long exp = JwtUtil.getBody(rspBody.getToken()).getExpiration().getTime();
        long expiresTime = System.currentTimeMillis() / 1000 + exp / 1000;
        return new AuthToken(rspBody.getToken(), expiresTime, AuthToken.TYPE_TOKEN);
    }
}
