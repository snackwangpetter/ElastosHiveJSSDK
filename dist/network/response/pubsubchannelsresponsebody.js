"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubsubChannelsResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class PubsubChannelsResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getChannels() {
        return this.channels;
    }
}
exports.PubsubChannelsResponseBody = PubsubChannelsResponseBody;
//# sourceMappingURL=pubsubchannelsresponsebody.js.map