import { ChannelMessage } from "../network/model/channelmessage";
export interface PubSubService {
    publish(channelName: string): Promise<boolean>;
    remove(channelName: string): Promise<boolean>;
    getPublishedChannels(): Promise<string[]>;
    getSubscribedChannels(): Promise<string[]>;
    subscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean>;
    unsubscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean>;
    push(channelName: string, message: string): Promise<boolean>;
    pop(channelName: string, pubDid: string, pubAppId: string, limit: number): Promise<ChannelMessage[]>;
}
