import { HiveResponseBody } from "./hiveresponsebody";
export declare class InsertDocResponseBody extends HiveResponseBody {
    private acknowledged;
    private insertedId;
    getAcknowledged(): boolean;
    getInsertedId(): string;
}
