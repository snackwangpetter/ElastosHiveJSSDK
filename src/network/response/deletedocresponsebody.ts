import { HiveResponseBody } from "./hiveresponsebody";

export class DeleteDocResponseBody extends HiveResponseBody {
    private acknowledged: string;
    // TODO JAVA @SerializedName("deleted_count")
    private deletedCount: number;

    public getAcknowledged(): string {
        return this.acknowledged;
    }

    public getDeletedCount(): number {
        return this.deletedCount;
    }
}
