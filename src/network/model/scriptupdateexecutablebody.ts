import { KeyValueDict } from "./keyvaluedict";
import { ScriptDeleteExecutableBody } from "./scriptdeleteexecutablebody";

export class ScriptUpdateExecutableBody extends ScriptDeleteExecutableBody {
    // TODO JAVA @SerializedName("update")
    private update: KeyValueDict;
    // TODO JAVA @SerializedName("options")
    private options: KeyValueDict;

    public setCollection(collection: string): ScriptUpdateExecutableBody {
        super.setCollection(collection);
        return this;
    }

    public setFilter(filter: KeyValueDict): ScriptUpdateExecutableBody {
        super.setFilter(filter);
        return this;
    }

    public setUpdate(update: KeyValueDict): ScriptUpdateExecutableBody {
        this.update = update;
        return this;
    }

    public setOptions(options: KeyValueDict): ScriptUpdateExecutableBody {
        this.options = options;
        return this;
    }
}
