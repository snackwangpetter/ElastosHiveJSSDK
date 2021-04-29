import { UpdateOptions } from "../../database/updateoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";

export class UpdateDocRequestBody extends CreateCollectionRequestBody {
    private filter: KeyValueDict;
    private update: KeyValueDict;
    private options: UpdateOptions;

    public constructor(name: string) {
        super(name);
    }

    public setFilter(filter: KeyValueDict): UpdateDocRequestBody {
        this.filter = filter;
        return this;
    }

    public setUpdate(update: KeyValueDict): UpdateDocRequestBody {
        this.update = update;
        return this;
    }

    public setOptions(options: UpdateOptions): UpdateDocRequestBody {
        this.options = options;
        return this;
    }
}
