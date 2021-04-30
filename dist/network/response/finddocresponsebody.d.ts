import { KeyValueDict } from "../model/keyvaluedict";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class FindDocResponseBody extends HiveResponseBody {
    private item;
    getItem(): KeyValueDict;
}
