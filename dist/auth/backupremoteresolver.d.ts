import { BackupContext } from "../service/backupcontext";
import { ServiceEndpoint } from "../serviceendpoint";
import { AuthToken } from "./authtoken";
import { TokenResolver } from "./tokenresolver";
export declare class BackupRemoteResolver implements TokenResolver {
    private contextProvider;
    private backupContext;
    private connectionManager;
    private targetDid;
    private targetHost;
    private authenticationService;
    constructor(serviceEndpoint: ServiceEndpoint, backupContext: BackupContext, targetServiceDid: string, targetAddress: string);
    getToken(): Promise<AuthToken>;
    private credential;
    invalidateToken(): void;
    setNextResolver(resolver: TokenResolver): void;
}
