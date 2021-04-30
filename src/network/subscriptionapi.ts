import { Get, Post } from "pretend";
import { BaseApi } from "./baseapi";
import { HiveResponseBody } from "./response/hiveresponsebody";
import { VaultCreateResponseBody } from "./response/vaultcreateresponsebody";
import { VaultInfoResponseBody } from "./response/vaultinforesponsebody";

export class SubscriptionApi {
	@Post(BaseApi.API_VERSION + "/service/vault/create")
	createVault(): Promise<VaultCreateResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/service/vault/freeze")
	freeze(): Promise<HiveResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/service/vault/unfreeze")
	unfreeze(): Promise<HiveResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/service/vault/remove")
	removeVault(): Promise<HiveResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/service/vault")
	getVaultInfo(): Promise<VaultInfoResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/service/vault_backup/create")
	createBackupVault(): Promise<VaultCreateResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/service/vault_backup")
	getBackupVaultInfo(): Promise<VaultInfoResponseBody> { return null; }
}
