import { AuthToken } from "./authtoken";

export interface TokenResolver {
	getToken(): Promise<AuthToken>;
	invalidateToken();
	setNextResolver(resolver: TokenResolver);
}
