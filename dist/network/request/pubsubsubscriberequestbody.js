"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubsubSubscribeRequestBody = void 0;
const pubsubrequestbody_1 = require("./pubsubrequestbody");
class PubsubSubscribeRequestBody extends pubsubrequestbody_1.PubsubRequestBody {
    constructor(channelName, pubDid, pubAppId) {
        super(channelName);
        this.pubDid = pubDid;
        this.pubAppId = pubAppId;
    }
}
exports.PubsubSubscribeRequestBody = PubsubSubscribeRequestBody;
//# sourceMappingURL=pubsubsubscriberequestbody.js.map