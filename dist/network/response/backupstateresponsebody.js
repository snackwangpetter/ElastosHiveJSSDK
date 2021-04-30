"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupStateResponseBody = void 0;
const hiveexception_1 = require("../../exception/hiveexception");
const backupservice_1 = require("../../service/backupservice");
const hiveresponsebody_1 = require("./hiveresponsebody");
class BackupStateResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getStatusResult() {
        switch (this.hiveBackupState) {
            case "stop":
                return backupservice_1.BackupService.BackupResult.STATE_STOP;
            case "backup":
                return backupservice_1.BackupService.BackupResult.STATE_BACKUP;
            case "restore":
                return backupservice_1.BackupService.BackupResult.STATE_RESTORE;
            default:
                throw new hiveexception_1.HiveException("Unknown state :" + this.result);
        }
    }
}
exports.BackupStateResponseBody = BackupStateResponseBody;
//# sourceMappingURL=backupstateresponsebody.js.map