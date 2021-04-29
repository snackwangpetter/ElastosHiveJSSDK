import { HiveResponseBody } from "./hiveresponsebody";

export class RegisterScriptResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("acknowledged")
    private acknowledged: boolean;
    // TODO JAVA @SerializedName("matched_count")
    private matchedCount: number;
    // TODO JAVA @SerializedName("modified_count")
    private modifiedCount: number;
    // TODO JAVA @SerializedName("upserted_id")
    private upsertedId: string;
}
