"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupService = void 0;
var BackupService;
(function (BackupService) {
    let BackupResult;
    (function (BackupResult) {
        BackupResult[BackupResult["STATE_STOP"] = 0] = "STATE_STOP";
        BackupResult[BackupResult["STATE_BACKUP"] = 1] = "STATE_BACKUP";
        BackupResult[BackupResult["STATE_RESTORE"] = 2] = "STATE_RESTORE";
    })(BackupResult = BackupService.BackupResult || (BackupService.BackupResult = {}));
})(BackupService = exports.BackupService || (exports.BackupService = {}));
//# sourceMappingURL=backupservice.js.map