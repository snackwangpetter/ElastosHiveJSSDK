import { HiveResponseBody } from "./hiveresponsebody";

export class FilesHashResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("SHA256")
    private sha256: string;

    public getSha256(): string {
        return this.sha256;
    }
}
