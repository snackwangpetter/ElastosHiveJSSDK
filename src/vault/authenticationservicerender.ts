import exp from "node:constants";
import { AppContextProvider } from "../appcontextprovider";
import { AuthToken } from "../auth/authtoken";
import { AuthRequestBody } from "../network/request/authrequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { ServiceEndpoint } from "../serviceendpoint";
import { JwtUtil } from "../utils/jwtutil";
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

    public async auth(token: string): Promise<AuthToken> {
        let rspBody = HiveResponseBody.validateBody(
                await this.getConnectionManager().getAuthApi()
                .auth(new AuthRequestBody(token))
                /* .execute()
                .body() */);
        let exp = JwtUtil.getBody(rspBody.getToken()).getExpiration().getTime();
        let expiresTime = new Date().getTime() / 1000 + exp / 1000;
        return new AuthToken(rspBody.getToken(), expiresTime, AuthToken.TYPE_TOKEN);
    }
}
