import { AuthToken } from "./authtoken";
export interface TokenResolver {
    getToken(): Promise<AuthToken>;
    invalidateToken(): any;
    setNextResolver(resolver: TokenResolver): any;
}
