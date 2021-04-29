import { KeyValueDict } from "./keyvaluedict";

export class ScriptDeleteExecutableBody {
    // TODO JAVA @SerializedName("collection")
    private collection: string;
    // TODO JAVA @SerializedName("filter")
    private filter: KeyValueDict;

    public setCollection(collection: string): ScriptDeleteExecutableBody {
        this.collection = collection;
        return this;
    }

    public setFilter(filter: KeyValueDict): ScriptDeleteExecutableBody {
        this.filter = filter;
        return this;
    }
}
