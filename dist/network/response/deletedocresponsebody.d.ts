import { HiveResponseBody } from "./hiveresponsebody";
export declare class DeleteDocResponseBody extends HiveResponseBody {
    private acknowledged;
    private deletedCount;
    getAcknowledged(): string;
    getDeletedCount(): number;
}
