export class ScriptFileUploadBody {
    // TODO JAVA @SerializedName("path")
    private path: string;

    public constructor(path: string) {
        this.path = path;
    }
}
