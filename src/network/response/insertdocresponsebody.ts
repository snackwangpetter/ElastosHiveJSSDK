import { HiveResponseBody } from "./hiveresponsebody";

export class InsertDocResponseBody extends HiveResponseBody {
    private acknowledged: boolean;
    // TODO JAVA @SerializedName("inserted_id")
    private insertedId: string;

    public getAcknowledged(): boolean {
        return this.acknowledged;
    }

    public getInsertedId(): string {
        return this.insertedId;
    }
}
