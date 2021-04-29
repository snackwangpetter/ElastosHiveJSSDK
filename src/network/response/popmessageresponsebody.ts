import { ChannelMessage } from "../model/channelmessage";
import { HiveResponseBody } from "./hiveresponsebody";

export class PopMessageResponseBody extends HiveResponseBody {
    private messages: ChannelMessage[];

    public getMessages(): ChannelMessage[] {
        return this.messages;
    }
}
