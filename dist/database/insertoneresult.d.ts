export declare class InsertOneResult {
    private acknowledged;
    private insertedId;
    isAcknowledged(): boolean;
    setAcknowledged(acknowledged: boolean): InsertOneResult;
    getInsertedId(): string;
    setInsertedId(insertedId: string): InsertOneResult;
}
