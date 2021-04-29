import { BackupContext } from "./backupcontext";

/**
 * Backup service is for doing backup vault data from vault node server to backup server.
 * Backup server maybe another node server or third-party centralized server like Google Drive.
 * As a restriction, only one vault can be used for one DID.
 * User also needs just one backup copy for vault data.
 */
export interface BackupService {
	/**
	 * Set-up a context for get more detailed information for backup server.
	 *
	 * @param context context for providing backup server details.
	 * @return Void
	 */
	setupContext(context: BackupContext): Promise<void>;

	/**
	 * Backup process in node side is a continues process. Vault node server backup whole vault data to
	 * backup server and keep syncing with it. This is for user personal data security.
	 * This function is for starting a background scheduler to update data to backup server. It's an
	 * async process.
	 *
	 * @return Void
	 */
	startBackup(): Promise<void>;

	/**
	 * As startBackup() shows, this is just for stopping the async process in vault node side.
	 *
	 * @return Void
	 */
	stopBackup(): Promise<void>;

	/**
	 * This is for restore vault data from backup server only once.
	 * The action is processed async in node side.
	 *
	 * @return Void
	 */
	restoreFrom(): Promise<void>;

	/**
	 * Stop the running restore process in background.
	 *
	 * @return Void
	 */
	stopRestore(): Promise<void>;

	/**
	 * Check the current status of the node side backup process.
	 *
	 * @return Void
	 */
	checkResult(): Promise<BackupService.BackupResult>;
}

export namespace BackupService {
	export enum BackupResult {
		STATE_STOP,
		STATE_BACKUP,
		STATE_RESTORE,
	}
}