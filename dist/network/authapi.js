"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.AuthApi = void 0;
const pretend_1 = require("pretend");
const decorators_1 = require("pretend/dist/decorators");
const baseapi_1 = require("./baseapi");
const signinresponsebody_1 = require("./response/signinresponsebody");
const authresponsebody_1 = require("./response/authresponsebody");
class AuthApi {
    signIn(reqBody) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    auth(reqBody) {
        return __awaiter(this, void 0, void 0, function* () { return null; });
    }
}
__decorate([
    pretend_1.Post(baseapi_1.BaseApi.API_VERSION + "/did/sign_in"),
    decorators_1.ResponseType(signinresponsebody_1.SignInResponseBody)
], AuthApi.prototype, "signIn", null);
__decorate([
    pretend_1.Post(baseapi_1.BaseApi.API_VERSION + "/did/auth"),
    decorators_1.ResponseType(authresponsebody_1.AuthResponseBody)
], AuthApi.prototype, "auth", null);
exports.AuthApi = AuthApi;
//# sourceMappingURL=authapi.js.map