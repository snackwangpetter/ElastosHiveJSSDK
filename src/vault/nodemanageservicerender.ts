import { Vault } from "../vault ";
import { HiveVaultRender } from "./hivevaultrender";

export class NodeManageServiceRender extends HiveVaultRender {
    public constructor(vault: Vault) {
        super(vault);
    }

    /* public String getVersion() throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getNodeManagerApi()
                        .version()
                        .execute()
                        .body()).getVersion();
    }

    public String getCommitHash() throws IOException {
        return HiveResponseBody.validateBody(
                getConnectionManager().getNodeManagerApi()
                        .commitHash()
                        .execute()
                        .body()).getCommitHash();
    } */
}
