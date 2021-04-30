"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptingServiceRender = void 0;
const invalidparameterexception_1 = require("../exception/invalidparameterexception");
const scriptcontext_1 = require("../network/model/scriptcontext");
const callscriptrequestbody_1 = require("../network/request/callscriptrequestbody");
const registerscriptrequestbody_1 = require("../network/request/registerscriptrequestbody");
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const scriptingapi_1 = require("../network/scriptingapi");
const hivevaultrender_1 = require("./hivevaultrender");
class ScriptingServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(serviceEndpoint) {
        super(serviceEndpoint);
    }
    registerScript(name, executable, condition = null, allowAnonymousUser = false, allowAnonymousApp = false) {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getScriptingApi()
                .registerScript(new registerscriptrequestbody_1.RegisterScriptRequestBody().setName(name)
                .setExecutable(executable)
                .setAllowAnonymousUser(allowAnonymousUser)
                .setAllowAnonymousApp(allowAnonymousApp)
                .setCondition(condition))
                .execute().body());
            return true;
        });
    }
    callScript(name, params, targetDid, targetAppDid, resultType) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.getValue(hiveresponsebody_1.HiveResponseBody.validateBodyStr(this.getConnectionManager().getScriptingApi()
                .callScript(new callscriptrequestbody_1.CallScriptRequestBody()
                .setName(name)
                .setContext(new scriptcontext_1.ScriptContext()
                .setTargetDid(targetDid)
                .setTargetAppDid(targetAppDid))
                .setParams(hiveresponsebody_1.HiveResponseBody.jsonNode2Map(params)))
                .execute()), resultType);
        });
    }
    callScriptUrl(name, params, targetDid, targetAppDid, resultType) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.getValue(hiveresponsebody_1.HiveResponseBody.validateBodyStr(this.getConnectionManager().getScriptingApi()
                .callScriptUrl(targetDid, targetAppDid, name, params)
                .execute()), resultType);
        });
    }
    uploadFile(transactionId, resultType) {
        return this.promiseWithConvertedException(() => {
            if (transactionId == null)
                throw new invalidparameterexception_1.InvalidParameterException("Invalid parameter transactionId.");
            return hiveresponsebody_1.HiveResponseBody.getRequestStream(this.getConnectionManager().openConnection(scriptingapi_1.ScriptingApi.API_SCRIPT_UPLOAD + "/" + transactionId), resultType);
        });
    }
    downloadFile(transactionId, resultType) {
        return this.promiseWithConvertedException(() => {
            if (transactionId == null)
                throw new invalidparameterexception_1.InvalidParameterException("Invalid parameter transactionId.");
            return hiveresponsebody_1.HiveResponseBody.getResponseStream(this.getConnectionManager().getScriptingApi()
                .callDownload(transactionId)
                .execute(), resultType);
        });
    }
}
exports.ScriptingServiceRender = ScriptingServiceRender;
//# sourceMappingURL=scriptingservicerender.js.map