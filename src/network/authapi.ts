import { Post } from "pretend"
import { ResponseType } from "pretend/dist/decorators"
import { BaseApi } from "./baseapi";
import { SignInResponseBody } from "./response/signinresponsebody";
import { SignInRequestBody } from "./request/signinrequestbody";
import { AuthRequestBody } from "./request/authrequestbody";
import { AuthResponseBody } from "./response/authresponsebody";

export class AuthApi {
	@Post(BaseApi.API_VERSION + "/did/sign_in")
	@ResponseType(SignInResponseBody)
	async signIn(/* @Body */ reqBody: SignInRequestBody) {}

	@Post(BaseApi.API_VERSION + "/did/auth")
	@ResponseType(AuthResponseBody)
	async auth(/* @Body */ reqBody: AuthRequestBody): Promise<AuthResponseBody> { return null; }
}
