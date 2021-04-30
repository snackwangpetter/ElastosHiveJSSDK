import { ChannelMessage } from "../network/model/channelmessage";
import { PubSubService } from "../service/pubsubservice";
import { Vault } from "../vault ";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";
export declare class PubSubServiceRender extends HiveVaultRender implements PubSubService, HttpExceptionHandler {
    constructor(vault: Vault);
    publish(channelName: string): Promise<boolean>;
    remove(channelName: string): Promise<boolean>;
    getPublishedChannels(): Promise<string[]>;
    getSubscribedChannels(): Promise<string[]>;
    subscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean>;
    unsubscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean>;
    push(channelName: string, message: string): Promise<boolean>;
    pop(channelName: string, pubDid: string, pubAppId: string, limit: number): Promise<ChannelMessage[]>;
}
