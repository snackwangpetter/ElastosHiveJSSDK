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
exports.BackupRemoteResolver = void 0;
const httpfailedexception_1 = require("../exception/httpfailedexception");
const illegalargumentexception_1 = require("../exception/illegalargumentexception");
const authenticationservicerender_1 = require("../vault/authenticationservicerender");
const authtoken_1 = require("./authtoken");
class BackupRemoteResolver {
    constructor(serviceEndpoint, backupContext, targetServiceDid, targetAddress) {
        this.contextProvider = serviceEndpoint.getAppContext().getAppContextProvider();
        this.backupContext = backupContext;
        this.connectionManager = serviceEndpoint.getConnectionManager();
        this.targetDid = targetServiceDid;
        this.targetHost = targetAddress;
        this.authenticationService = new authenticationservicerender_1.AuthenticationServiceRender(serviceEndpoint);
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.credential(this.authenticationService.signIn4Issuer());
            }
            catch (e) {
                throw new httpfailedexception_1.HttpFailedException(401, "Failed to authentication backup credential.");
            }
        });
    }
    credential(sourceDid) {
        return new authtoken_1.AuthToken(this.backupContext
            .getAuthorization(sourceDid, this.targetDid, this.targetHost).get(), 0, authtoken_1.AuthToken.TYPE_BACKUP);
    }
    invalidateToken() {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
    setNextResolver(resolver) {
        throw new illegalargumentexception_1.UnsupportedOperationException();
    }
}
exports.BackupRemoteResolver = BackupRemoteResolver;
//# sourceMappingURL=backupremoteresolver.js.map