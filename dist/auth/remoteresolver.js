"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteResolver = void 0;
const httpfailedexception_1 = require("../exception/httpfailedexception");
const illegalargumentexception_1 = require("../exception/illegalargumentexception");
const authenticationservicerender_1 = require("../vault/authenticationservicerender");
class RemoteResolver {
    constructor(serviceEndpoint) {
        this.contextProvider = serviceEndpoint.getAppContext().getAppContextProvider();
        this.authenticationService = new authenticationservicerender_1.AuthenticationServiceRender(serviceEndpoint);
    }
    getToken() {
        try {
            return this.authenticationService.auth(this.authenticationService.signIn4Token());
        }
        catch (e) {
            throw new httpfailedexception_1.HttpFailedException(401, "Failed to get token by auth requests.");
        }
    }
    invalidateToken() {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
    setNextResolver(resolver) {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
}
exports.RemoteResolver = RemoteResolver;
//# sourceMappingURL=remoteresolver.js.map