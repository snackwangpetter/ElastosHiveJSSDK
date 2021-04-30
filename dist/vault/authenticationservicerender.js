"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationServiceRender = void 0;
const authtoken_1 = require("../auth/authtoken");
const authrequestbody_1 = require("../network/request/authrequestbody");
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const jwtutil_1 = require("../utils/jwtutil");
const hivevaultrender_1 = require("./hivevaultrender");
class AuthenticationServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(serviceEndpoint) {
        super(serviceEndpoint);
        this.contextProvider = serviceEndpoint.getAppContext().getAppContextProvider();
    }
    auth(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let rspBody = hiveresponsebody_1.HiveResponseBody.validateBody(yield this.getConnectionManager().getAuthApi()
                .auth(new authrequestbody_1.AuthRequestBody(token)));
            let exp = jwtutil_1.JwtUtil.getBody(rspBody.getToken()).getExpiration().getTime();
            let expiresTime = new Date().getTime() / 1000 + exp / 1000;
            return new authtoken_1.AuthToken(rspBody.getToken(), expiresTime, authtoken_1.AuthToken.TYPE_TOKEN);
        });
    }
}
exports.AuthenticationServiceRender = AuthenticationServiceRender;
//# sourceMappingURL=authenticationservicerender.js.map