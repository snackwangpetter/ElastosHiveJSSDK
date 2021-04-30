import { PubsubRequestBody } from "./pubsubrequestbody";
export declare class PubsubSubscribeRequestBody extends PubsubRequestBody {
    private pubDid;
    private pubAppId;
    constructor(channelName: string, pubDid: string, pubAppId: string);
}
