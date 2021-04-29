import { HiveResponseBody } from "./hiveresponsebody";

export class InsertDocsResponseBody extends HiveResponseBody {
    private acknowledged: boolean;
    // TODO JAVA @SerializedName("inserted_ids")
    private insertedIds: string[];

    public getAcknowledged(): boolean {
        return this.acknowledged;
    }

    public getInsertedIds(): string[] {
        return this.insertedIds;
    }
}
