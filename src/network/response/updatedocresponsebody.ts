import { HiveResponseBody } from "./hiveresponsebody";

export class UpdateDocResponseBody extends HiveResponseBody {
    private acknowledged: boolean;
    // TODO JAVA @SerializedName("matched_count")
    private matchedCount: number;
    // TODO JAVA @SerializedName("modified_count")
    private modifiedCount: number;
    // TODO JAVA @SerializedName("upserted_id")
    private upsertedId: string;

    public getAcknowledged(): boolean {
        return this.acknowledged;
    }

    public getMatchedCount(): number {
        return this.matchedCount;
    }

    public getModifiedCount(): number {
        return this.modifiedCount;
    }

    public getUpsertedId(): string {
        return this.upsertedId;
    }
}
