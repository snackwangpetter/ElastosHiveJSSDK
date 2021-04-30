"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopMessageRequestBody = void 0;
const pubsubsubscriberequestbody_1 = require("./pubsubsubscriberequestbody");
class PopMessageRequestBody extends pubsubsubscriberequestbody_1.PubsubSubscribeRequestBody {
    constructor(channelName, pubDid, pubAppId) {
        super(channelName, pubDid, pubAppId);
    }
    setMessageLimit(limit) {
        this.messageLimit = limit;
        return this;
    }
}
exports.PopMessageRequestBody = PopMessageRequestBody;
//# sourceMappingURL=popmessagerequestbody.js.map