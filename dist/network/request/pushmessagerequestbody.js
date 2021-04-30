"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushMessageRequestBody = void 0;
const pubsubrequestbody_1 = require("./pubsubrequestbody");
class PushMessageRequestBody extends pubsubrequestbody_1.PubsubRequestBody {
    constructor(channelName, message) {
        super(channelName);
        this.message = message;
    }
}
exports.PushMessageRequestBody = PushMessageRequestBody;
//# sourceMappingURL=pushmessagerequestbody.js.map