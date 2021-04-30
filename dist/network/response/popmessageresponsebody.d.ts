import { ChannelMessage } from "../model/channelmessage";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class PopMessageResponseBody extends HiveResponseBody {
    private messages;
    getMessages(): ChannelMessage[];
}
