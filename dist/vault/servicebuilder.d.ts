import { BackupService } from "../service/backupservice";
import { DatabaseService } from "../service/databaseservice";
import { FilesService } from "../service/filesservice";
import { PubSubService } from "../service/pubsubservice";
import { ScriptingService } from "../service/scriptingservice";
import { Vault } from "../vault ";
export declare class ServiceBuilder {
    private vault;
    constructor(vault: Vault);
    createFilesService(): FilesService;
    createDatabase(): DatabaseService;
    createScriptingService(): ScriptingService;
    createPubsubService(): PubSubService;
    createBackupService(): BackupService;
}
