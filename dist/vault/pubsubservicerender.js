"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubServiceRender = void 0;
const hivevaultrender_1 = require("./hivevaultrender");
class PubSubServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(vault) {
        super(vault);
    }
    publish(channelName) {
        return null;
    }
    remove(channelName) {
        return null;
    }
    getPublishedChannels() {
        return null;
    }
    getSubscribedChannels() {
        return null;
    }
    subscribe(channelName, pubDid, pubAppId) {
        return null;
    }
    unsubscribe(channelName, pubDid, pubAppId) {
        return null;
    }
    push(channelName, message) {
        return null;
    }
    pop(channelName, pubDid, pubAppId, limit) {
        return null;
    }
}
exports.PubSubServiceRender = PubSubServiceRender;
//# sourceMappingURL=pubsubservicerender.js.map