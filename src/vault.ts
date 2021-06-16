import { AppContext } from "./appcontext";
import { ServiceBuilder } from "./vault/servicebuilder";
import { BackupService } from "./service/backupservice";
import { DatabaseService } from "./service/databaseservice";
import { FilesService } from "./service/filesservice";
import { PubSubService } from "./service/pubsubservice";
import { ScriptingService } from "./service/scriptingservice";
import { ServiceEndpoint } from "./serviceendpoint";
import { HttpExceptionHandler } from "./vault/httpexceptionhandler";
import { NodeManageServiceRender } from "./vault/nodemanageservicerender";
import { Exception, CompletionException } from "./exception/exception";

/**
 * This class explicitly represents the vault service subscribed by "userDid".
 */
export class Vault extends ServiceEndpoint implements HttpExceptionHandler {
	private filesService: FilesService;
	private databaseService: DatabaseService;
	private scriptingService: ScriptingService;
	private pubsubService: PubSubService;
	private backupService: BackupService;
	private nodeManageService: NodeManageServiceRender;

	public constructor(context: AppContext, providerAddress: string) {
		super(context, providerAddress);

		this.filesService 	= new ServiceBuilder(this).createFilesService();
		this.databaseService = new ServiceBuilder(this).createDatabase();
		this.pubsubService 	= new ServiceBuilder(this).createPubsubService();
		this.backupService 	= new ServiceBuilder(this).createBackupService();
		this.scriptingService = new ServiceBuilder(this).createScriptingService();
		this.nodeManageService = new NodeManageServiceRender(this);
	}

	public getFilesService(): FilesService {
		return this.filesService;
	}

	public getDatabaseService(): DatabaseService {
		return this.databaseService;
	}

	public getScriptingService(): ScriptingService {
		return this.scriptingService;
	}

	public getPubSubService(): PubSubService {
		return this.pubsubService;
	}

	public getBackupService(): BackupService {
		return this.backupService;
	}

	public getVersion(): Promise<string> {
		return new Promise((resolve, reject)=>{
			try {
				resolve(this.nodeManageService.getVersion());
			} catch (e) {
				reject(new CompletionException(this.convertException(e as Exception)));
			}
		});
	}

	public getCommitHash(): Promise<string> {
		return new Promise((resolve, reject)=>{
			try {
				resolve(this.nodeManageService.getCommitHash());
			} catch (e) {
				reject(new CompletionException(this.convertException(e as Exception)));
			}
		});
	}
}
