"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopMessageResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class PopMessageResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getMessages() {
        return this.messages;
    }
}
exports.PopMessageResponseBody = PopMessageResponseBody;
//# sourceMappingURL=popmessageresponsebody.js.map