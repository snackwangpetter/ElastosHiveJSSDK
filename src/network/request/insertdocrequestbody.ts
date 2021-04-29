import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";

export class InsertDocRequestBody extends CreateCollectionRequestBody {
    private document: KeyValueDict;
    private options: InsertOneOptions;

    public constructor(name: string, document: KeyValueDict, options: InsertOneOptions) {
        super(name);
        this.document = document;
        this.options = options;
    }
}
