import { HiveResponseBody } from "./hiveresponsebody";
export declare class UpdateDocResponseBody extends HiveResponseBody {
    private acknowledged;
    private matchedCount;
    private modifiedCount;
    private upsertedId;
    getAcknowledged(): boolean;
    getMatchedCount(): number;
    getModifiedCount(): number;
    getUpsertedId(): string;
}
