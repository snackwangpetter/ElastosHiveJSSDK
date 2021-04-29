import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";

export class DeleteDocRequestBody extends CreateCollectionRequestBody {
    private filter: KeyValueDict;

    public constructor(name: string, filter: KeyValueDict) {
        super(name);
        this.filter = filter;
    }
}
