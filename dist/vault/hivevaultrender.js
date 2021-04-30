"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveVaultRender = void 0;
const httpexceptionhandler_1 = require("./httpexceptionhandler");
const unsupportedoperationexception_1 = require("../exception/unsupportedoperationexception");
class HiveVaultRender extends httpexceptionhandler_1.HttpExceptionHandler {
    constructor(serviceEndpoint) {
        super();
        this.serviceEndpoint = serviceEndpoint;
        this.context = serviceEndpoint.getAppContext();
    }
    getAppContext() {
        return this.context;
    }
    getServiceEndpoint() {
        return this.serviceEndpoint;
    }
    getConnectionManager() {
        return this.serviceEndpoint.getConnectionManager();
    }
    promiseWithConvertedException(runnable) {
        return new Promise((resolve, reject) => {
            try {
                resolve(runnable());
            }
            catch (e) {
                throw new unsupportedoperationexception_1.CompletionException(this.convertException(e));
            }
        });
    }
}
exports.HiveVaultRender = HiveVaultRender;
//# sourceMappingURL=hivevaultrender.js.map