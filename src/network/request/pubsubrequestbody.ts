export class PubsubRequestBody {
    // TODO JAVA @SerializedName("channel_name")
    private channelName: string;

    public constructor(channelName: string) {
        this.channelName = channelName;
    }
}
