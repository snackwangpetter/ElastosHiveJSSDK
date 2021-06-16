import { stat } from "node:fs";
import path from "node:path";
import { Class } from "../class";
import { Exception, HttpFailedException, FileDoesNotExistException } from "../exception/exception";
import { FilesApi } from "../network/filesapi";
import { FileInfo } from "../network/model/fileinfo";
import { FilesCopyRequestBody } from "../network/request/filescopyrequestbody";
import { FilesDeleteRequestBody } from "../network/request/filesdeleterequestbody";
import { FilesMoveRequestBody } from "../network/request/filesmoverequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { FilesService } from "../service/filesservice";
import { Vault } from "../vault";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";

export class FilesServiceRender extends HiveVaultRender implements FilesService, HttpExceptionHandler {
	public constructor(vault: Vault) {
		super(vault);
	}

	public upload<T>(path: string, resultType: Class<T>): Promise<T> {
		return this.promiseWithConvertedException<T>(()=>{
			return HiveResponseBody.getRequestStream(
				this.getConnectionManager().openConnection(FilesApi.API_UPLOAD + "/" + path),
				resultType);
		});
	}

	public list(path: string): Promise<FileInfo[]> {
		return this.promiseWithConvertedException<FileInfo[]>(async ()=>{
			return HiveResponseBody.validateBody(
				await this.getConnectionManager().getFilesApi()
						.list(path)
						/* .execute()
						.body() */).getFileInfoList();
		});
	}

	public stat(path: string): Promise<FileInfo> {
		return this.promiseWithConvertedException<FileInfo>(async ()=>{
			return HiveResponseBody.validateBody(
				await this.getConnectionManager().getFilesApi()
						.properties(path)
						/* .execute().body() */).getFileInfo();
		});
	}

	public download<T>(path: string, resultType: Class<T> ): Promise<T> {
		return this.promiseWithConvertedException<T>(async ()=>{
			return HiveResponseBody.getResponseStream(
				await this.getConnectionManager().getFilesApi()
						.download(path)
						/* .execute() */, resultType);
		});
	}

	public delete(path: string): Promise<boolean> {
		return this.promiseWithConvertedException<boolean>(async ()=>{
			HiveResponseBody.validateBody(await this.getConnectionManager().getFilesApi()
				.delete(new FilesDeleteRequestBody(path))
				/* .execute() .body()*/);
			return true;
		});
	}

	public move(source: string, target: string): Promise<boolean> {
		return this.promiseWithConvertedException<boolean>(async ()=>{
			HiveResponseBody.validateBody(
				await this.getConnectionManager().getFilesApi()
						.move(new FilesMoveRequestBody(source, target))
						/* .execute().body() */);
			return true;
		});
	}

	public copy(source: string, target: string): Promise<boolean> {
		return this.promiseWithConvertedException<boolean>(async ()=>{
			HiveResponseBody.validateBody(
				await this.getConnectionManager().getFilesApi()
				.copy(new FilesCopyRequestBody(source, target))
				/* .execute().body() */);
			return true;
		});
	}

	public hash(path: string): Promise<string> {
		return this.promiseWithConvertedException<string>(async ()=>{
			return HiveResponseBody.validateBody(
				await this.getConnectionManager().getFilesApi()
						.hash(path)
						/* .execute()
						.body() */).getSha256();
		});
	}

	public convertException(e: Exception): Exception {
		if (e instanceof HttpFailedException) {
			let ex = e as HttpFailedException;
			if (ex.getCode() == 404)
				return new FileDoesNotExistException();
		}
		return super.convertException(e);
	}
}
