import { KeyValueDict } from "./keyvaluedict";
export declare class ScriptFindBody {
    private collection;
    private filter;
    private options;
    constructor(collection: string, filter: KeyValueDict, options?: KeyValueDict);
}
