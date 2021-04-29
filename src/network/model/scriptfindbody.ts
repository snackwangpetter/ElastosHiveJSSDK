import { KeyValueDict } from "./keyvaluedict";

/**
 * For the member `condition` and `executable` of the request body.
 */
export class ScriptFindBody {
    // TODO JAVA @SerializedName("collection")
    private collection: string;
    // TODO JAVA @SerializedName("filter")
    private filter: KeyValueDict;
    // TODO JAVA @SerializedName("options")
    private options: KeyValueDict;

    public constructor(collection: string, filter: KeyValueDict, options: KeyValueDict = null) {
        this.collection = collection;
        this.filter = filter;
        this.options = options;
    }
}
