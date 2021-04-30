import { PubSubService } from "../service/pubsubservice";
import { Vault } from "../vault ";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";

export class PubSubServiceRender extends HiveVaultRender implements PubSubService, HttpExceptionHandler {
	public constructor(vault: Vault) {
		super(vault);
	}

	/* @Override
	public CompletableFuture<Boolean> publish(String channelName) {
		return null;
	}

	@Override
	public CompletableFuture<Boolean> remove(String channelName) {
		return null;
	}

	@Override
	public CompletableFuture<List<String>> getPublishedChannels() {
		return null;
	}

	@Override
	public CompletableFuture<List<String>> getSubscribedChannels() {
		return null;
	}

	@Override
	public CompletableFuture<Boolean> subscribe(String channelName, String pubDid, String pubAppId) {
		return null;
	}

	@Override
	public CompletableFuture<Boolean> unsubscribe(String channelName, String pubDid, String pubAppId) {
		return null;
	}

	@Override
	public CompletableFuture<Boolean> push(String channelName, String message) {
		return null;
	}

	@Override
	public CompletableFuture<List<ChannelMessage>> pop(String channelName, String pubDid, String pubAppId, int limit) {
		return null;
	} */
}
