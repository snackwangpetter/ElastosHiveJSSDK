import { FindOptions } from "../../database/findoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { FindDocRequestBody } from "./finddocrequestbody";
export declare class FindDocsRequestBody extends FindDocRequestBody {
    constructor(name: string, filter: KeyValueDict, options: FindOptions);
}
