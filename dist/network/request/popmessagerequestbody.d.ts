import { PubsubSubscribeRequestBody } from "./pubsubsubscriberequestbody";
export declare class PopMessageRequestBody extends PubsubSubscribeRequestBody {
    private messageLimit;
    constructor(channelName: string, pubDid: string, pubAppId: string);
    setMessageLimit(limit: number): PopMessageRequestBody;
}
