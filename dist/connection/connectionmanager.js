"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManager = void 0;
const pretend_1 = require("pretend");
const authapi_1 = require("../network/authapi");
const backupapi_1 = require("../network/backupapi");
const databaseapi_1 = require("../network/databaseapi");
const filesapi_1 = require("../network/filesapi");
const nodemanageapi_1 = require("../network/nodemanageapi");
const paymentapi_1 = require("../network/paymentapi");
const scriptingapi_1 = require("../network/scriptingapi");
const subscriptionapi_1 = require("../network/subscriptionapi");
const requestinterceptor_1 = require("./requestinterceptor");
class ConnectionManager {
    constructor(serviceEndpoint) {
        this.serviceEndpoint = serviceEndpoint;
        this.plainRequestInterceptor = new requestinterceptor_1.RequestInterceptor(this);
    }
    getServiceEndpoint() {
        return this.serviceEndpoint;
    }
    getAuthApi() {
        if (this.authApi == null)
            this.authApi = ConnectionManager.createService(authapi_1.AuthApi, this.serviceEndpoint.getProviderAddress(), this.authRequestInterceptor.interceptor);
        return this.authApi;
    }
    getNodeManagerApi() {
        if (this.nodeManageApi == null)
            this.nodeManageApi = ConnectionManager.createService(nodemanageapi_1.NodeManageApi, this.serviceEndpoint.getProviderAddress(), this.authRequestInterceptor.interceptor);
        return this.nodeManageApi;
    }
    getFilesApi() {
        if (this.filesApi == null)
            this.filesApi = ConnectionManager.createService(filesapi_1.FilesApi, this.serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor.interceptor);
        return this.filesApi;
    }
    getSubscriptionApi() {
        if (this.subscriptionApi == null) {
            this.subscriptionApi = ConnectionManager.createService(subscriptionapi_1.SubscriptionApi, this.serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor.interceptor);
        }
        return this.subscriptionApi;
    }
    getPaymentApi() {
        if (this.paymentApi == null) {
            this.paymentApi = ConnectionManager.createService(paymentapi_1.PaymentApi, this.serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor.interceptor);
        }
        return this.paymentApi;
    }
    getDatabaseApi() {
        if (this.databaseApi == null) {
            this.databaseApi = ConnectionManager.createService(databaseapi_1.DatabaseApi, this.serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor.interceptor);
        }
        return this.databaseApi;
    }
    getScriptingApi() {
        if (this.scriptingApi == null) {
            this.scriptingApi = ConnectionManager.createService(scriptingapi_1.ScriptingApi, this.serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor.interceptor);
        }
        return this.scriptingApi;
    }
    getBackupApi() {
        if (this.backupApi == null) {
            this.backupApi = ConnectionManager.createService(backupapi_1.BackupApi, this.serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor.interceptor);
        }
        return this.backupApi;
    }
    static createService(serviceClass, baseUrl, requestInterceptor) {
        return pretend_1.Pretend.builder()
            .requestInterceptor(requestInterceptor)
            .decode(pretend_1.Pretend.JsonDecoder)
            .target(serviceClass, baseUrl);
    }
}
exports.ConnectionManager = ConnectionManager;
ConnectionManager.DEFAULT_TIMEOUT = 30;
//# sourceMappingURL=connectionmanager.js.map