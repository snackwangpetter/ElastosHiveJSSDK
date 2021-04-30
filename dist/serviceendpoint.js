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
exports.ServiceEndpoint = void 0;
const connectionmanager_1 = require("./connection/connectionmanager");
const unsupportedoperationexception_1 = require("./exception/unsupportedoperationexception");
const httpexceptionhandler_1 = require("./vault/httpexceptionhandler");
class ServiceEndpoint extends httpexceptionhandler_1.HttpExceptionHandler {
    constructor(context, providerAddress) {
        super();
        this.context = context;
        this.providerAddress = providerAddress;
        this.connectionManager = new connectionmanager_1.ConnectionManager(this);
    }
    getAppContext() {
        return this.context;
    }
    getUserDid() {
        return this.context.getUserDid();
    }
    getProviderAddress() {
        return this.providerAddress;
    }
    getConnectionManager() {
        return this.connectionManager;
    }
    getAppDid() {
        return null;
    }
    getAppInstanceDid() {
        return null;
    }
    getServiceDid() {
        return null;
    }
    getServiceInstanceDid() {
        return null;
    }
    promiseWithConvertedException(runnable) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                resolve(yield runnable());
            }
            catch (e) {
                throw new unsupportedoperationexception_1.CompletionException(this.convertException(e));
            }
        }));
    }
}
exports.ServiceEndpoint = ServiceEndpoint;
//# sourceMappingURL=serviceendpoint.js.map