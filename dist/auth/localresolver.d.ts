import { AuthToken } from "./authtoken";
import { TokenResolver } from "./tokenresolver";
export declare class LocalResolver implements TokenResolver {
    static TYPE_AUTH_TOKEN: string;
    static TYPE_BACKUP_CREDENTIAL: string;
    private static TOKEN_FOLDER;
    private type;
    private tokenPath;
    private nextResolver;
    private token;
    constructor(userDid: string, providerAddress: string, type: string, cacheDir: string);
    getToken(): Promise<AuthToken>;
    invalidateToken(): void;
    setNextResolver(resolver: TokenResolver): void;
    private restoreToken;
    private saveToken;
    private clearToken;
}
