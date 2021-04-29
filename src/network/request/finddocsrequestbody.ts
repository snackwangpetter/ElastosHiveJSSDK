import { KeyValueDict } from "../model/keyvaluedict";
import { FindDocRequestBody } from "./finddocrequestbody";

export class FindDocsRequestBody extends FindDocRequestBody {
    public constructor(name: string, filter: KeyValueDict, options: FindOptions) {
        super(name, filter, options);
    }
}
