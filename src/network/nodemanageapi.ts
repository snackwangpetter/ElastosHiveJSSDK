import { Get } from "pretend";
import { BaseApi } from "./baseapi";
import { NodeCommitHashResponseBody } from "./response/nodecommithashresponsebody";
import { NodeVersionResponseBody } from "./response/nodeversionresponsebody";

export class NodeManageApi {
	@Get(BaseApi.API_VERSION + "/hive/version")
	version(): Promise<NodeVersionResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/hive/commithash")
	commitHash(): Promise<NodeCommitHashResponseBody> { return null; }
}
