import { PubsubSubscribeRequestBody } from "./pubsubsubscriberequestbody";

export class PopMessageRequestBody extends PubsubSubscribeRequestBody {
    // TODO JAVA @SerializedName("message_limit")
    private messageLimit: number;

    public constructor(channelName: string, pubDid: string, pubAppId: string) {
        super(channelName, pubDid, pubAppId);
    }

    public setMessageLimit(limit: number): PopMessageRequestBody {
        this.messageLimit = limit;
        return this;
    }
}
