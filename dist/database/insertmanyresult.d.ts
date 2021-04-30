export declare class InsertManyResult {
    private acknowledged;
    private insertedIds;
    isAcknowledged(): boolean;
    setAcknowledged(acknowledged: boolean): InsertManyResult;
    getInsertedIds(): string[];
    setInsertedIds(insertedIds: string[]): InsertManyResult;
}
