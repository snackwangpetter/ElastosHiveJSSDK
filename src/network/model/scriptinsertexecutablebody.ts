import { KeyValueDict } from "./keyvaluedict";

export class ScriptInsertExecutableBody {
    // TODO JAVA @SerializedName("collection")
    private collection: string;
    // TODO JAVA @SerializedName("document")
    private document: KeyValueDict;
    // TODO JAVA @SerializedName("options")
    private options: KeyValueDict;

    public ScriptInsertExecutableBody(collection: string, document: KeyValueDict, options: KeyValueDict = null) {
        this.collection = collection;
        this.document = document;
        this.options = options;
    }
}
