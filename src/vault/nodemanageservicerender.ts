import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { Vault } from "../vault ";
import { HiveVaultRender } from "./hivevaultrender";

export class NodeManageServiceRender extends HiveVaultRender {
    public constructor(vault: Vault) {
        super(vault);
    }

    public getVersion(): Promise<string> {
        return HiveResponseBody.validateBody(
                this.getConnectionManager().getNodeManagerApi()
                        .version()
                        .execute()
                        .body()).getVersion();
    }

    public getCommitHash(): Promise<string> {
        return HiveResponseBody.validateBody(
                this.getConnectionManager().getNodeManagerApi()
                        .commitHash()
                        .execute()
                        .body()).getCommitHash();
    }
}
