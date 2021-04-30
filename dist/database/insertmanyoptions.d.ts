import { InsertOneOptions } from "./insertoneoptions";
export declare class InsertManyOptions extends InsertOneOptions {
    private ordered;
    constructor(bypassDocumentValidation: boolean, ordered: boolean);
}
