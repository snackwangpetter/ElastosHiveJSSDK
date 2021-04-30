import { CountOptions } from "../../database/countoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";
export declare class CountDocRequestBody extends CreateCollectionRequestBody {
    private filter;
    private options;
    constructor(name: string, filter: KeyValueDict, options: CountOptions);
}
