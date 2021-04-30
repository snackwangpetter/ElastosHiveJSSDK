import { BackupRemoteResolver } from "../auth/backupremoteresolver";
import { LocalResolver } from "../auth/localresolver";
import { TokenResolver } from "../auth/tokenresolver";
import { UnsupportedOperationException } from "../exception/illegalargumentexception";
import { CompletionException } from "../exception/unsupportedoperationexception";
import { BackupRestoreRequestBody } from "../network/request/backuprestorerequestbody";
import { BackupSaveRequestBody } from "../network/request/backupsaverequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { BackupContext } from "../service/backupcontext";
import { BackupService } from "../service/backupservice";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";

export class BackupServiceRender extends HiveVaultRender implements BackupService, HttpExceptionHandler {
    private backupContext: BackupContext;
    private tokenResolver: TokenResolver;

    public constructor(serviceEndpoint: ServiceEndpoint) {
        super(serviceEndpoint);
    }

    public async setupContext(backupContext: BackupContext): Promise<void> {
        this.backupContext = backupContext;
        this.tokenResolver = new LocalResolver(
                this.getServiceEndpoint().getUserDid(),
                this.getServiceEndpoint().getProviderAddress(),
                LocalResolver.TYPE_BACKUP_CREDENTIAL,
                this.getServiceEndpoint().getAppContext().getAppContextProvider().getLocalDataDir());
        this.tokenResolver.setNextResolver(new BackupRemoteResolver(
                this.getServiceEndpoint(),
                backupContext,
                backupContext.getParameter("targetServiceDid"),
                backupContext.getParameter("targetAddress")));
        return null;
    }

    public startBackup(): Promise<void> {
        return new Promise((resolve, reject)=>{
            try {
                HiveResponseBody.validateBody(
                        this.getConnectionManager().getBackupApi()
                                .saveToNode(new BackupSaveRequestBody(this.tokenResolver.getToken().getAccessToken()))
                                .execute()
                                .body());
                resolve();
            } catch (e) {
                reject(new CompletionException(this.convertException(e)));
            }
        });
    }

    public stopBackup(): Promise<void> {
        throw new UnsupportedOperationException();
    }

    public restoreFrom(): Promise<void> {
        return new Promise((resolve, reject)=>{
            try {
                HiveResponseBody.validateBody(
                        this.getConnectionManager().getBackupApi()
                                .restoreFromNode(new BackupRestoreRequestBody(
                                        this.tokenResolver.getToken().getAccessToken()))
                                .execute()
                                .body());
                resolve();
            } catch (e) {
                reject(new CompletionException(this.convertException(e)));
            }
        });
    }

    public stopRestore(): Promise<void> {
        throw new UnsupportedOperationException();
    }

    public checkResult(): Promise<BackupResult> {
        return new Promise((resolve, reject)=>{
            try {
                resolve(HiveResponseBody.validateBody(
                        this.getConnectionManager().getBackupApi()
                                .getState()
                                .execute()
                                .body()).getStatusResult());
            } catch (e) {
                reject(new CompletionException(this.convertException(e)));
            }
        });
    } 
}
