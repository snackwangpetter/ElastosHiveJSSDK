export declare class FindOptions {
    private projection;
    private skip;
    private sort;
    private allowPartialResults;
    private batchSize;
    private returnKey;
    private showRecordId;
    setProjection(projection: Map<string, any>): FindOptions;
    setSkip(skip: number): this;
    setSort(sort: FindOptions.FieldEntry[]): FindOptions;
    setAllowPartialResults(allowPartialResults: boolean): FindOptions;
    setBatchSize(batchSize: number): FindOptions;
    setReturnKey(returnKey: boolean): FindOptions;
    setShowRecordId(showRecordId: boolean): FindOptions;
}
export declare namespace FindOptions {
    class FieldEntry extends Map<string, any> {
        FieldEntry(field: string, value: any): void;
    }
}
