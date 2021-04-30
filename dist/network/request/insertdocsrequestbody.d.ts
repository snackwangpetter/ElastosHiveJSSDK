import { InsertManyOptions } from "../../database/insertmanyoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";
export declare class InsertDocsRequestBody extends CreateCollectionRequestBody {
    private documents;
    private options;
    constructor(name: string, documents: KeyValueDict[], options: InsertManyOptions);
}
