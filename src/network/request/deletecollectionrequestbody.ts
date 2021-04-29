import { CreateCollectionRequestBody } from "./createcollectionrequestbody";

export class DeleteCollectionRequestBody extends CreateCollectionRequestBody {
    public constructor(name: string) {
        super(name);
    }
}
