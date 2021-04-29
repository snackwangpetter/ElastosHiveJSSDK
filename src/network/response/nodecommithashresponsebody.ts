import { HiveResponseBody } from "./hiveresponsebody";

export class NodeCommitHashResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("commit_hash")
    private commitHash: string;

    public getCommitHash(): string {
        return this.commitHash;
    }
}
