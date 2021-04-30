import { HiveException } from "../../exception/hiveexception";
import { BackupService } from "../../service/backupservice";
import { HiveResponseBody } from "./hiveresponsebody";

export class BackupStateResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("hive_backup_state")
    private hiveBackupState: string;
    // TODO JAVA @SerializedName("result")
    private result: string;

    public getStatusResult(): BackupService.BackupResult {
        switch (this.hiveBackupState) {
            case "stop":
                return BackupService.BackupResult.STATE_STOP;
            case "backup":
                return BackupService.BackupResult.STATE_BACKUP;
            case "restore":
                return BackupService.BackupResult.STATE_RESTORE;
            default:
                throw new HiveException("Unknown state :" + this.result);
        }
    }
}
