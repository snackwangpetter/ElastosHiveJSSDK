export declare class UpdateResult {
    private matchedCount;
    private modifiedCount;
    private acknowledged;
    private upsertedId;
    setMatchedCount(matchedCount: number): UpdateResult;
    setModifiedCount(modifiedCount: number): UpdateResult;
    setAcknowledged(acknowledged: boolean): UpdateResult;
    setUpsertedId(upsertedId: string): UpdateResult;
}
