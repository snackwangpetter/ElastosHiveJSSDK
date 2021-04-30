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
exports.BackupServiceRender = void 0;
const backupremoteresolver_1 = require("../auth/backupremoteresolver");
const localresolver_1 = require("../auth/localresolver");
const illegalargumentexception_1 = require("../exception/illegalargumentexception");
const backuprestorerequestbody_1 = require("../network/request/backuprestorerequestbody");
const backupsaverequestbody_1 = require("../network/request/backupsaverequestbody");
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const hivevaultrender_1 = require("./hivevaultrender");
class BackupServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(serviceEndpoint) {
        super(serviceEndpoint);
    }
    setupContext(backupContext) {
        return __awaiter(this, void 0, void 0, function* () {
            this.backupContext = backupContext;
            this.tokenResolver = new localresolver_1.LocalResolver(this.getServiceEndpoint().getUserDid(), this.getServiceEndpoint().getProviderAddress(), localresolver_1.LocalResolver.TYPE_BACKUP_CREDENTIAL, this.getServiceEndpoint().getAppContext().getAppContextProvider().getLocalDataDir());
            this.tokenResolver.setNextResolver(new backupremoteresolver_1.BackupRemoteResolver(this.getServiceEndpoint(), backupContext, backupContext.getParameter("targetServiceDid"), backupContext.getParameter("targetAddress")));
            return null;
        });
    }
    startBackup() {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getBackupApi()
                .saveToNode(new backupsaverequestbody_1.BackupSaveRequestBody(this.tokenResolver.getToken().getAccessToken()))
                .execute()
                .body());
        });
    }
    stopBackup() {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
    restoreFrom() {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getBackupApi()
                .restoreFromNode(new backuprestorerequestbody_1.BackupRestoreRequestBody(this.tokenResolver.getToken().getAccessToken()))
                .execute()
                .body());
        });
    }
    stopRestore() {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
    checkResult() {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getBackupApi()
                .getState()
                .execute()
                .body()).getStatusResult();
        });
    }
}
exports.BackupServiceRender = BackupServiceRender;
//# sourceMappingURL=backupservicerender.js.map