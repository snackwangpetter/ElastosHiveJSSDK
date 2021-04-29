import { PubsubRequestBody } from "./pubsubrequestbody";

export class PubsubSubscribeRequestBody extends PubsubRequestBody {
    // TODO JAVA @SerializedName("pub_did")
    private pubDid: string;
    // TODO JAVA @SerializedName("pub_app_id")
    private pubAppId: string;

    public constructor(channelName: string, pubDid: string, pubAppId: string) {
        super(channelName);
        this.pubDid = pubDid;
        this.pubAppId = pubAppId;
    }
}
