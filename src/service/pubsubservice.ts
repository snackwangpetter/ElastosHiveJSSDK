export interface PubSubService {
    /**
     * Publish a new channel for the following subscript and message send/receive.
     * TODO:
     * @param channelName channel name
     * @return successfully
     */
    publish(channelName: string): Promise<boolean>;

    remove(channelName: string): Promise<boolean>;

    getPublishedChannels(): Promise<string[]>;

    getSubscribedChannels(): Promise<string[]>;

    subscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean>;

    unsubscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean>;

    push(channelName: string, message: string): Promise<boolean>;

    pop(channelName: string, pubDid: string, pubAppId: string, limit: number): Promise<ChannelMessage[]>;
}
