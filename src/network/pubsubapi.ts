import { Get, Post } from "pretend";
import { BaseApi } from "./baseapi";
import { PopMessageRequestBody } from "./request/popmessagerequestbody";
import { PubsubRequestBody } from "./request/pubsubrequestbody";
import { PubsubSubscribeRequestBody } from "./request/pubsubsubscriberequestbody";
import { PushMessageRequestBody } from "./request/pushmessagerequestbody";
import { HiveResponseBody } from "./response/hiveresponsebody";
import { PopMessageResponseBody } from "./response/popmessageresponsebody";
import { PubsubChannelsResponseBody } from "./response/pubsubchannelsresponsebody";

export class PubsubApi {
    @Post(BaseApi.API_VERSION + "/pubsub/publish")
    publish(/* @Body  */body: PubsubRequestBody): Promise<HiveResponseBody> { return null; }

    @Post(BaseApi.API_VERSION + "/pubsub/remove")
    remove(/* @Body  */body: PubsubRequestBody): Promise<HiveResponseBody> { return null; }

    @Get(BaseApi.API_VERSION + "/pubsub/pub/channels")
    getPublishedChannels(): Promise<PubsubChannelsResponseBody> { return null; }

    @Get(BaseApi.API_VERSION + "/pubsub/sub/channels")
    getSubscribedChannels(): Promise<PubsubChannelsResponseBody> { return null; }

    @Post(BaseApi.API_VERSION + "/pubsub/subscribe")
    subscribe(/* @Body  */body: PubsubSubscribeRequestBody): Promise<HiveResponseBody> { return null; }

    @Post(BaseApi.API_VERSION + "/pubsub/unsubscribe")
    unsubscribe(/* @Body  */body: PubsubSubscribeRequestBody): Promise<HiveResponseBody> { return null; }

    @Post(BaseApi.API_VERSION + "/pubsub/push")
    push(/* @Body  */body: PushMessageRequestBody): Promise<HiveResponseBody> { return null; }

    @Post(BaseApi.API_VERSION + "/pubsub/pop")
    pop(/* @Body  */body: PopMessageRequestBody): Promise<PopMessageResponseBody> { return null; }
}
