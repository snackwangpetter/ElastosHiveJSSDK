"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptRunner = void 0;
const serviceendpoint_1 = require("./serviceendpoint");
const scriptingservicerender_1 = require("./vault/scriptingservicerender");
class ScriptRunner extends serviceendpoint_1.ServiceEndpoint {
    constructor(context, providerAddress) {
        super(context, providerAddress);
        this.scriptingServiceRender = new scriptingservicerender_1.ScriptingServiceRender(this);
    }
    callScript(name, params, targetDid, targetAppDid, resultType) {
        return this.scriptingServiceRender.callScript(name, params, targetDid, targetAppDid, resultType);
    }
    callScriptUrl(name, params, targetDid, targetAppDid, resultType) {
        return this.scriptingServiceRender.callScriptUrl(name, params, targetDid, targetAppDid, resultType);
    }
    downloadFile(transactionId, resultType) {
        return this.scriptingServiceRender.downloadFile(transactionId, resultType);
    }
    uploadFile(transactionId, resultType) {
        return this.scriptingServiceRender.uploadFile(transactionId, resultType);
    }
}
exports.ScriptRunner = ScriptRunner;
//# sourceMappingURL=scriptrunner.js.map