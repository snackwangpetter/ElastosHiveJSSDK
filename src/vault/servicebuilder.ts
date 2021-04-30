import { BackupService } from "../service/backupservice";
import { DatabaseService } from "../service/databaseservice";
import { FilesService } from "../service/filesservice";
import { PubSubService } from "../service/pubsubservice";
import { ScriptingService } from "../service/scriptingservice";
import { Vault } from "../vault ";
import { BackupServiceRender } from "./backupservicerender";
import { DatabaseServiceRender } from "./databaseservicerender";
import { FilesServiceRender } from "./filesservicerender";
import { PubSubServiceRender } from "./pubsubservicerender";
import { ScriptingServiceRender } from "./scriptingservicerender";

export class ServiceBuilder {
	private vault: Vault;

	public constructor(vault: Vault) {
		this.vault = vault;
	}

	public createFilesService(): FilesService {
		return new FilesServiceRender(this.vault);
	}

	public createDatabase(): DatabaseService {
		return new DatabaseServiceRender(this.vault);
	}

	public createScriptingService(): ScriptingService {
		return new ScriptingServiceRender(this.vault);
	}

	public createPubsubService(): PubSubService {
		return new PubSubServiceRender(this.vault);
	}

	public createBackupService(): BackupService {
		return new BackupServiceRender(this.vault);
	}
}
