import { KeyValueDict } from "../model/keyvaluedict";
import { HiveResponseBody } from "./hiveresponsebody";

export class FindDocsResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("items")
    private items: KeyValueDict[];

    public getItems(): KeyValueDict[] {
        return this.items;
    }
}
