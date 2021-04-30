import { FindOptions } from "../../database/findoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";
export declare class FindDocRequestBody extends CreateCollectionRequestBody {
    private filter;
    private options;
    constructor(name: string, filter: KeyValueDict, options: FindOptions);
}
