import { KeyValueDict } from "./keyvaluedict";
export declare class ScriptDeleteExecutableBody {
    private collection;
    private filter;
    setCollection(collection: string): ScriptDeleteExecutableBody;
    setFilter(filter: KeyValueDict): ScriptDeleteExecutableBody;
}
