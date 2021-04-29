import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";

export class FindDocRequestBody extends CreateCollectionRequestBody {
    private filter: KeyValueDict;
    private options: FindOptions;

    public constructor(name: string, filter: KeyValueDict, options: FindOptions) {
        super(name);
        this.filter = filter;
        this.options = options;
    }
}
