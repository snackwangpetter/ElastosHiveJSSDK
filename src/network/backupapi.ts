import { Get, Post } from "pretend";
import { BaseApi } from "./baseapi";
import { BackupRestoreRequestBody } from "./request/backuprestorerequestbody";
import { BackupSaveRequestBody } from "./request/backupsaverequestbody";
import { EmptyRequestBody } from "./request/emptyrequestbody";
import { BackupStateResponseBody } from "./response/backupstateresponsebody";
import { HiveResponseBody } from "./response/hiveresponsebody";

export class BackupApi {
	/**
	 * Current backup process status on node side.
	 */
	@Get(BaseApi.API_VERSION + "/backup/state")
	getState(): Promise<BackupStateResponseBody> { return null; }

	/**
	 * Save the database and files data to backup node server from vault node server.
	 */
	@Post(BaseApi.API_VERSION + "/backup/save_to_node")
	saveToNode(/* @Body  */body: BackupSaveRequestBody): Promise<HiveResponseBody> { return null; }

	/**
	 * Restore backup data to vault and replace the exist one.
	 */
	@Post(BaseApi.API_VERSION + "/backup/restore_from_node")
	restoreFromNode(/* @Body  */ body: BackupRestoreRequestBody): Promise<HiveResponseBody> { return null; }

	/**
	 * Active backup data to vault on backup server side.
	 */
	@Post(BaseApi.API_VERSION + "/backup/activate_to_vault")
	activeToVault(/* @Body  */ body: EmptyRequestBody): Promise<HiveResponseBody> { return null; }
}
