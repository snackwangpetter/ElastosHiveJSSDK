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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalResolver = void 0;
const node_path_1 = __importDefault(require("node:path"));
const hivesdkexception_1 = require("../exception/hivesdkexception");
const cryptoutil_1 = require("../utils/cryptoutil");
const logutil_1 = require("../utils/logutil");
const authtoken_1 = require("./authtoken");
class LocalResolver {
    constructor(userDid, providerAddress, type, cacheDir) {
        this.type = type;
        let rootDir = cacheDir + TOKEN_FOLDER;
        File;
        root = new File(rootDir);
        if (!root.exists() && !root.mkdirs()) {
            throw new hivesdkexception_1.HiveSdkException("Cannot create token root path.");
        }
        this.tokenPath = String.format("%s/%s", rootDir, cryptoutil_1.CryptoUtil.getSHA256(userDid + providerAddress + type));
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.token == null)
                this.token = this.restoreToken();
            if (this.token == null || this.token.isExpired()) {
                this.token = yield this.nextResolver.getToken();
                this.saveToken(this.token);
            }
            return this.token;
        });
    }
    invalidateToken() {
        if (this.token != null) {
            this.token = null;
            this.clearToken();
        }
    }
    setNextResolver(resolver) {
        this.nextResolver = resolver;
    }
    restoreToken() {
        Path;
        node_path_1.default = Paths.get(tokenPath);
        if (!Files.exists(node_path_1.default))
            return null;
        try {
            logutil_1.LogUtil.d(null, "Restore access token  from local cache");
            return new Gson().fromJson(new String(Files.readAllBytes(node_path_1.default)), authtoken_1.AuthToken.class);
        }
        catch (e) {
            logutil_1.LogUtil.e(null, "Failed to restore access token from local cache");
            return null;
        }
    }
    saveToken(token) {
        Path;
        node_path_1.default = Paths.get(tokenPath);
        if (!Files.exists(node_path_1.default)) {
        }
        try {
            Files.write(node_path_1.default, new Gson().toJson(token).getBytes(StandardCharsets.UTF_8));
        }
        catch (e) {
            logutil_1.LogUtil.e(null, "Failed to save access token to local cache");
            e.printStackTrace();
        }
    }
    clearToken() {
        try {
            Files.deleteIfExists(Paths.get(tokenPath));
        }
        catch (e) {
            e.printStackTrace();
        }
    }
}
exports.LocalResolver = LocalResolver;
LocalResolver.TYPE_AUTH_TOKEN = "auth_token";
LocalResolver.TYPE_BACKUP_CREDENTIAL = "backup_credential";
LocalResolver.TOKEN_FOLDER = "/tokens";
//# sourceMappingURL=localresolver.js.map