import { AppContextProvider } from "../appcontextprovider";
import { HttpFailedException, UnsupportedOperationException } from "../exception/exception";
import { ServiceEndpoint } from "../serviceendpoint";
import { AuthenticationServiceRender } from "../vault/authenticationservicerender";
import { AuthToken } from "./authtoken";
import { TokenResolver } from "./tokenresolver";

export class RemoteResolver implements TokenResolver {
	private contextProvider: AppContextProvider;
	private authenticationService: AuthenticationServiceRender;

	public constructor(serviceEndpoint: ServiceEndpoint) {
		this.contextProvider = serviceEndpoint.getAppContext().getAppContextProvider();
		this.authenticationService = new AuthenticationServiceRender(serviceEndpoint);
	}

	public getToken(): Promise<AuthToken> {
		try {
			return this.authenticationService.auth(this.authenticationService.signIn4Token());
		} catch (e) {
			//LogUtil.d(null, Throwables.getStackTraceAsString(e));
			throw new HttpFailedException(401, "Failed to get token by auth requests.");
		}
	}

	public invalidateToken() {
		throw new UnsupportedOperationException();
	}

	public setNextResolver(resolver: TokenResolver) {
		throw new UnsupportedOperationException();
	}
}
