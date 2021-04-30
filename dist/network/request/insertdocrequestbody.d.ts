import { InsertOneOptions } from "../../database/insertoneoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";
export declare class InsertDocRequestBody extends CreateCollectionRequestBody {
    private document;
    private options;
    constructor(name: string, document: KeyValueDict, options: InsertOneOptions);
}
