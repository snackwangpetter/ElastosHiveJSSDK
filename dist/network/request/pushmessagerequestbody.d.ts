import { PubsubRequestBody } from "./pubsubrequestbody";
export declare class PushMessageRequestBody extends PubsubRequestBody {
    private message;
    constructor(channelName: string, message: string);
}
