import { HiveResponseBody } from "./hiveresponsebody";

export class PubsubChannelsResponseBody extends HiveResponseBody {
    private channels: string[];

    public getChannels(): string[] {
        return this.channels;
    }
}
