"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBuilder = void 0;
const backupservicerender_1 = require("./backupservicerender");
const databaseservicerender_1 = require("./databaseservicerender");
const filesservicerender_1 = require("./filesservicerender");
const pubsubservicerender_1 = require("./pubsubservicerender");
const scriptingservicerender_1 = require("./scriptingservicerender");
class ServiceBuilder {
    constructor(vault) {
        this.vault = vault;
    }
    createFilesService() {
        return new filesservicerender_1.FilesServiceRender(this.vault);
    }
    createDatabase() {
        return new databaseservicerender_1.DatabaseServiceRender(this.vault);
    }
    createScriptingService() {
        return new scriptingservicerender_1.ScriptingServiceRender(this.vault);
    }
    createPubsubService() {
        return new pubsubservicerender_1.PubSubServiceRender(this.vault);
    }
    createBackupService() {
        return new backupservicerender_1.BackupServiceRender(this.vault);
    }
}
exports.ServiceBuilder = ServiceBuilder;
//# sourceMappingURL=servicebuilder.js.map