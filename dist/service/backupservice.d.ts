import { BackupContext } from "./backupcontext";
export interface BackupService {
    setupContext(context: BackupContext): Promise<void>;
    startBackup(): Promise<void>;
    stopBackup(): Promise<void>;
    restoreFrom(): Promise<void>;
    stopRestore(): Promise<void>;
    checkResult(): Promise<BackupService.BackupResult>;
}
export declare namespace BackupService {
    enum BackupResult {
        STATE_STOP = 0,
        STATE_BACKUP = 1,
        STATE_RESTORE = 2
    }
}
