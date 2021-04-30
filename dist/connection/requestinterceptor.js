"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestInterceptor = void 0;
const localresolver_1 = require("../auth/localresolver");
const remoteresolver_1 = require("../auth/remoteresolver");
class RequestInterceptor {
    constructor(connectionManager, needToken = true) {
        this.tokenResolver = new localresolver_1.LocalResolver(connectionManager.getServiceEndpoint().getAppContext().getUserDid(), connectionManager.getServiceEndpoint().getProviderAddress(), localresolver_1.LocalResolver.TYPE_AUTH_TOKEN, connectionManager.getServiceEndpoint().getAppContext().getAppContextProvider().getLocalDataDir());
        this.tokenResolver.setNextResolver(new remoteresolver_1.RemoteResolver(connectionManager.getServiceEndpoint()));
        this.needToken = needToken;
    }
    interceptor(request) {
    }
}
exports.RequestInterceptor = RequestInterceptor;
//# sourceMappingURL=requestinterceptor.js.map