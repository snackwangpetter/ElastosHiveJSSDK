import { PubsubRequestBody } from "./pubsubrequestbody";

export class PushMessageRequestBody extends PubsubRequestBody {
    private message: string;

    public constructor(channelName: string, message: string) {
        super(channelName);
        this.message = message;
    }
}
