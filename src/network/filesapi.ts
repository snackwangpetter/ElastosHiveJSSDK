import { Get, Post } from "pretend";
import { BaseApi } from "./baseapi";
import { FilesCopyRequestBody } from "./request/filescopyrequestbody";
import { FilesDeleteRequestBody } from "./request/filesdeleterequestbody";
import { FilesMoveRequestBody } from "./request/filesmoverequestbody";
import { FilesHashResponseBody } from "./response/fileshashresponsebody";
import { FilesListResponseBody } from "./response/fileslistresponsebody";
import { FilesPropertiesResponseBody } from "./response/filespropertiesresponsebody";
import { HiveResponseBody } from "./response/hiveresponsebody";

export class FilesApi {
	private static API_UPLOAD = "/files/upload";

	@Get(BaseApi.API_VERSION + "/files/list/folder")
	list(/* @Query("path")  */filename: string): Promise<FilesListResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/files/properties")
	properties(/* @Query("path")  */filename: string): Promise<FilesPropertiesResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/files/download")
	download(/* @Query("path")  */filename: string): Promise</* ResponseBody */any> { return null; }

	@Post(BaseApi.API_VERSION + "/files/delete")
	delete(/* @Body  */body: FilesDeleteRequestBody): Promise<HiveResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/files/move")
	move(/* @Body  */body: FilesMoveRequestBody): Promise<HiveResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/files/copy")
	copy(/* @Body  */body: FilesCopyRequestBody): Promise<HiveResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/files/file/hash")
	hash(/* @Query("path")  */filename: string): Promise<FilesHashResponseBody> { return null; }
}
