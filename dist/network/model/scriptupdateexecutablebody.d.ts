import { KeyValueDict } from "./keyvaluedict";
import { ScriptDeleteExecutableBody } from "./scriptdeleteexecutablebody";
export declare class ScriptUpdateExecutableBody extends ScriptDeleteExecutableBody {
    private update;
    private options;
    setCollection(collection: string): ScriptUpdateExecutableBody;
    setFilter(filter: KeyValueDict): ScriptUpdateExecutableBody;
    setUpdate(update: KeyValueDict): ScriptUpdateExecutableBody;
    setOptions(options: KeyValueDict): ScriptUpdateExecutableBody;
}
