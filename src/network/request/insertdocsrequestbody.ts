import { InsertManyOptions } from "../../database/insertmanyoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";

export class InsertDocsRequestBody extends CreateCollectionRequestBody {
    // TODO JAVA @SerializedName("document")
    private documents: KeyValueDict[];
    private options: InsertManyOptions;

    public constructor(name: string, documents: KeyValueDict[], options: InsertManyOptions) {
        super(name);
        this.documents = documents;
        this.options = options;
    }
}
