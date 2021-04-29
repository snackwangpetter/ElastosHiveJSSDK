export class FilesMoveRequestBody {
    // TODO JAVA @SerializedName("src_path")
    private srcPath: string;

    // TODO JAVA @SerializedName("dst_path")
    private dstPath: string;

    public constructor(srcPath: string, dstPath: string) {
        this.srcPath = srcPath;
        this.dstPath = dstPath;
    }
}
