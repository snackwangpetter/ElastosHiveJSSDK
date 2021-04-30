import { SignInRequestBody } from "./request/signinrequestbody";
import { AuthRequestBody } from "./request/authrequestbody";
import { AuthResponseBody } from "./response/authresponsebody";
export declare class AuthApi {
    signIn(reqBody: SignInRequestBody): Promise<void>;
    auth(reqBody: AuthRequestBody): Promise<AuthResponseBody>;
}
