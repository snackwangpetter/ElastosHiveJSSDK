"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = void 0;
const servicebuilder_1 = require("./vault/servicebuilder");
const serviceendpoint_1 = require("./serviceendpoint");
const nodemanageservicerender_1 = require("./vault/nodemanageservicerender");
const unsupportedoperationexception_1 = require("./exception/unsupportedoperationexception");
class Vault extends serviceendpoint_1.ServiceEndpoint {
    constructor(context, providerAddress) {
        super(context, providerAddress);
        this.filesService = new servicebuilder_1.ServiceBuilder(this).createFilesService();
        this.databaseService = new servicebuilder_1.ServiceBuilder(this).createDatabase();
        this.pubsubService = new servicebuilder_1.ServiceBuilder(this).createPubsubService();
        this.backupService = new servicebuilder_1.ServiceBuilder(this).createBackupService();
        this.scriptingService = new servicebuilder_1.ServiceBuilder(this).createScriptingService();
        this.nodeManageService = new nodemanageservicerender_1.NodeManageServiceRender(this);
    }
    getFilesService() {
        return this.filesService;
    }
    getDatabaseService() {
        return this.databaseService;
    }
    getScriptingService() {
        return this.scriptingService;
    }
    getPubSubService() {
        return this.pubsubService;
    }
    getBackupService() {
        return this.backupService;
    }
    getVersion() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.nodeManageService.getVersion());
            }
            catch (e) {
                reject(new unsupportedoperationexception_1.CompletionException(this.convertException(e)));
            }
        });
    }
    getCommitHash() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.nodeManageService.getCommitHash());
            }
            catch (e) {
                reject(new unsupportedoperationexception_1.CompletionException(this.convertException(e)));
            }
        });
    }
}
exports.Vault = Vault;
//# sourceMappingURL=vault%20.js.map