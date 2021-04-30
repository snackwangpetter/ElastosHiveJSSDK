import { AppContext } from "./appcontext";
import { BackupService } from "./service/backupservice";
import { DatabaseService } from "./service/databaseservice";
import { FilesService } from "./service/filesservice";
import { PubSubService } from "./service/pubsubservice";
import { ScriptingService } from "./service/scriptingservice";
import { ServiceEndpoint } from "./serviceendpoint";
import { HttpExceptionHandler } from "./vault/httpexceptionhandler";
export declare class Vault extends ServiceEndpoint implements HttpExceptionHandler {
    private filesService;
    private databaseService;
    private scriptingService;
    private pubsubService;
    private backupService;
    private nodeManageService;
    constructor(context: AppContext, providerAddress: string);
    getFilesService(): FilesService;
    getDatabaseService(): DatabaseService;
    getScriptingService(): ScriptingService;
    getPubSubService(): PubSubService;
    getBackupService(): BackupService;
    getVersion(): Promise<string>;
    getCommitHash(): Promise<string>;
}
