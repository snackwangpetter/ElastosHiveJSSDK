import { HiveResponseBody } from "./hiveresponsebody";
export declare class InsertDocsResponseBody extends HiveResponseBody {
    private acknowledged;
    private insertedIds;
    getAcknowledged(): boolean;
    getInsertedIds(): string[];
}
