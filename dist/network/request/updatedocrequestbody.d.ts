import { UpdateOptions } from "../../database/updateoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";
export declare class UpdateDocRequestBody extends CreateCollectionRequestBody {
    private filter;
    private update;
    private options;
    constructor(name: string);
    setFilter(filter: KeyValueDict): UpdateDocRequestBody;
    setUpdate(update: KeyValueDict): UpdateDocRequestBody;
    setOptions(options: UpdateOptions): UpdateDocRequestBody;
}
