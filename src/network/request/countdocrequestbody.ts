import { CountOptions } from "../../database/countoptions";
import { KeyValueDict } from "../model/keyvaluedict";
import { CreateCollectionRequestBody } from "./createcollectionrequestbody";

export class CountDocRequestBody extends CreateCollectionRequestBody {
    private filter: KeyValueDict;
    private options: CountOptions;

    public constructor(name: string, filter: KeyValueDict, options: CountOptions) {
        super(name);
        this.filter = filter;
        this.options = options;
    }
}