import { AppContextProvider } from "../appcontextprovider";
import { ConnectionManager } from "../connection/connectionmanager";
import { HttpFailedException } from "../exception/httpfailedexception";
import { UnsupportedOperationException } from "../exception/illegalargumentexception";
import { BackupContext } from "../service/backupcontext";
import { ServiceEndpoint } from "../serviceendpoint";
import { AuthenticationServiceRender } from "../vault/authenticationservicerender";
import { AuthToken } from "./authtoken";
import { TokenResolver } from "./tokenresolver";

export class BackupRemoteResolver implements TokenResolver {
    private contextProvider: AppContextProvider;
    private backupContext: BackupContext;
    private connectionManager: ConnectionManager;
    private targetDid: string;
    private targetHost: string;
    private authenticationService: AuthenticationServiceRender;

    public constructor(serviceEndpoint: ServiceEndpoint, backupContext: BackupContext, targetServiceDid: string, targetAddress: string) {
        this.contextProvider = serviceEndpoint.getAppContext().getAppContextProvider();
        this.backupContext = backupContext;
        this.connectionManager = serviceEndpoint.getConnectionManager();
        this.targetDid = targetServiceDid;
        this.targetHost = targetAddress;
        this.authenticationService = new AuthenticationServiceRender(serviceEndpoint);
    }

    public async getToken(): Promise<AuthToken> {
        try {
            return this.credential(this.authenticationService.signIn4Issuer());
        } catch (e) {
            throw new HttpFailedException(401, "Failed to authentication backup credential.");
        }
    }

    private credential(sourceDid: string): AuthToken {
        return new AuthToken(this.backupContext
                .getAuthorization(sourceDid, this.targetDid, this.targetHost).get(),
                0, AuthToken.TYPE_BACKUP);
    }

    public invalidateToken() {
        throw new UnsupportedOperationException();
    }

    public setNextResolver(resolver: TokenResolver) {
        throw new UnsupportedOperationException();
    }
}
