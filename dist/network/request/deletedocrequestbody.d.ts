import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";
export declare class DeleteDocRequestBody extends CreateCollectionRequestBody {
    private filter;
    constructor(name: string, filter: KeyValueDict);
}
