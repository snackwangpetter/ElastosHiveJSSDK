import { KeyValueDict } from "../model/keyvaluedict";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class FindDocsResponseBody extends HiveResponseBody {
    private items;
    getItems(): KeyValueDict[];
}
