import { BackupService } from "../../service/backupservice";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class BackupStateResponseBody extends HiveResponseBody {
    private hiveBackupState;
    private result;
    getStatusResult(): BackupService.BackupResult;
}
