import { KeyValueDict } from "../model/keyvaluedict";
import { HiveResponseBody } from "./hiveresponsebody";

export class FindDocResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("items")
    private item: KeyValueDict;

    public getItem(): KeyValueDict {
        return this.item;
    }
}
