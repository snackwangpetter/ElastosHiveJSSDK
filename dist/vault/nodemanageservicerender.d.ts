import { Vault } from "../vault ";
import { HiveVaultRender } from "./hivevaultrender";
export declare class NodeManageServiceRender extends HiveVaultRender {
    constructor(vault: Vault);
    getVersion(): Promise<string>;
    getCommitHash(): Promise<string>;
}
