import { Get } from "pretend";

export class BackupApi {
	/**
	 * Current backup process status on node side.
	 */
	/* @Get(BaseApi.API_VERSION + "/backup/state")
	Call<BackupStateResponseBody> getState(); */

	/**
	 * Save the database and files data to backup node server from vault node server.
	 */
	/* @POST(BaseApi.API_VERSION + "/backup/save_to_node")
	Call<HiveResponseBody> saveToNode(@Body BackupSaveRequestBody body); */

	/**
	 * Restore backup data to vault and replace the exist one.
	 */
	/* @POST(BaseApi.API_VERSION + "/backup/restore_from_node")
	Call<HiveResponseBody> restoreFromNode(@Body BackupRestoreRequestBody body); */

	/**
	 * Active backup data to vault on backup server side.
	 */
	/* @POST(BaseApi.API_VERSION + "/backup/activate_to_vault")
	Call<HiveResponseBody> activeToVault(@Body EmptyRequestBody body); */
}
