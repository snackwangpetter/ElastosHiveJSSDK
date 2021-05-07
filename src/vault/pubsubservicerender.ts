import { ChannelMessage } from "../network/model/channelmessage";
import { PubSubService } from "../service/pubsubservice";
import { Vault } from "../vault";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";

export class PubSubServiceRender extends HiveVaultRender implements PubSubService, HttpExceptionHandler {
	public constructor(vault: Vault) {
		super(vault);
	}

	public publish(channelName: string): Promise<boolean> {
		return null;
	}

	public remove(channelName: string): Promise<boolean> {
		return null;
	}

	public getPublishedChannels(): Promise<string[]> {
		return null;
	}

	public getSubscribedChannels(): Promise<string[]> {
		return null;
	}

	public subscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean> {
		return null;
	}

	public unsubscribe(channelName: string, pubDid: string, pubAppId: string): Promise<boolean> {
		return null;
	}

	public push(channelName: string, message: string): Promise<boolean> {
		return null;
	}

	public pop(channelName: string, pubDid: string, pubAppId: string, limit: number): Promise<ChannelMessage[]> {
		return null;
	}
}
