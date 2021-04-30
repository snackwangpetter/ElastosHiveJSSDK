"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class AuthResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getToken() {
        return this.token;
    }
}
exports.AuthResponseBody = AuthResponseBody;
//# sourceMappingURL=authresponsebody.js.map