import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { Vault } from "../vault";
import { HiveVaultRender } from "./hivevaultrender";

export class NodeManageServiceRender extends HiveVaultRender {
    public constructor(vault: Vault) {
        super(vault);
    }

    public async getVersion(): Promise<string> {
        return HiveResponseBody.validateBody(
                await this.getConnectionManager().getNodeManagerApi()
                        .version()
                        /* .execute()
                        .body() */).getVersion();
    }

    public async getCommitHash(): Promise<string> {
        return HiveResponseBody.validateBody(
                await this.getConnectionManager().getNodeManagerApi()
                        .commitHash()
                        /* .execute()
                        .body() */).getCommitHash();
    }
}
