import { DIDDocument } from '@elastosfoundation/did-js-sdk/typings';
import { AppContextProvider } from '../../http/security/appcontextprovider';
import { HttpClient } from '../../http/httpclient';
import { ServiceContext } from '../../http/servicecontext';
import { HttpResponseParser } from '../../http/httpresponseparser';
import { NodeRPCException, ServerUnknownException } from '../../exceptions';
import { Claims } from '../../domain/jwt/claims';
import { JWTParserBuilder } from '../../domain/jwt/jwtparserbuilder';
import { Logger } from '../../logger';
import { RestService } from '../restservice';

export class AuthService extends RestService {
	private static LOG = new Logger("AuthService");

	private static SIGN_IN_ENDPOINT = "/api/v2/did/signin";
	private static AUTH_ENDPOINT = "/api/v2/did/auth";

	private contextProvider: AppContextProvider;

    constructor(serviceContext: ServiceContext, httpClient: HttpClient) {
		super(serviceContext, httpClient);
		this.contextProvider = serviceContext.getAppContext().getAppContextProvider();
    }

	public async fetch(): Promise<string> {
		try {
			let challenge: string  = await this.signIn(this.contextProvider.getAppInstanceDocument());

			let challengeResponse: string = await this.contextProvider.getAuthorization(challenge);
			return this.auth(challengeResponse, this.contextProvider.getAppInstanceDocument());
		} catch (e) {
			throw new NodeRPCException(401,-1, "Failed to get token by auth requests.");
		}
	}

    //@POST("/api/v2/did/signin")
	//Call<ChallengeRequest> signIn(@Body SignInRequest request);
    public async signIn(appInstanceDidDoc: DIDDocument): Promise<string> {
		let challenge: string = await this.httpClient.send(AuthService.SIGN_IN_ENDPOINT, appInstanceDidDoc.toString(), <HttpResponseParser<string>> {
			deserialize(content: any): string {
				return JSON.parse(content)['challenge'];
			}
		});

		if (!this.checkValid(challenge, appInstanceDidDoc.getSubject().toString())) {
			AuthService.LOG.error("Failed to check the valid of challenge code when sign in.");
			throw new ServerUnknownException("Invalid challenge code, possibly being hacked.");
		}
		return challenge;
    }

	//@POST("/api/v2/did/auth")
	//Call<AccessCode> auth(@Body ChallengeResponse request);
    public async auth(challengeResponse: string, appInstanceDidDoc: DIDDocument): Promise<string> {
		let challengeResponseRequest = {
			"challenge_response": challengeResponse
		};
		let token: string = await this.httpClient.send(AuthService.AUTH_ENDPOINT, challengeResponseRequest, <HttpResponseParser<string>> {
			deserialize(content: any): string {
				return JSON.parse(content)['token'];
			}
		});

		if (!this.checkValid(token, appInstanceDidDoc.getSubject().toString())) {
			AuthService.LOG.error("Failed to check the valid of access token when auth.");
			throw new ServerUnknownException("Invalid challenge code, possibly being hacked.");
		}
		return token;


    }

	private async checkValid(jwtCode: string, expectationDid: string): Promise<boolean> {
		try {
			let claims: Claims = (await new JWTParserBuilder().build().parse(jwtCode)).getBody();
			return claims.getExpiration() > Date.now() &&
					claims.getAudience().equals(expectationDid);
		} catch (e) {
			return false;
		}
	}

}