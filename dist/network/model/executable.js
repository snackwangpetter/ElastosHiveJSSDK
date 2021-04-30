"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executable = void 0;
const hivesdkexception_1 = require("../../exception/hivesdkexception");
const condition_1 = require("./condition");
const scriptfileuploadbody_1 = require("./scriptfileuploadbody");
class Executable extends condition_1.Condition {
    constructor(name, type, body) {
        super(name, type, body);
    }
    setOutput(output) {
        this.output = output;
        return this;
    }
    static createFileUploadExecutable(name) {
        return new Executable(name, Executable.TYPE_FILE_UPLOAD, new scriptfileuploadbody_1.ScriptFileUploadBody("$params.path")).setOutput(true);
    }
    static createFileUploadParams(groupId, path) {
        try {
            return new ObjectMapper().readTree(String.format("{\"group_id\":{\"$oid\":\"%s\"},\"path\":\"%s\"}", groupId, path));
        }
        catch (e) {
            throw new hivesdkexception_1.HiveSdkException("invalid groupId or path");
        }
    }
    static createFileDownloadExecutable(name) {
        return new Executable(name, Executable.TYPE_FILE_DOWNLOAD, new scriptfileuploadbody_1.ScriptFileUploadBody("$params.path")).setOutput(true);
    }
    static createFileDownloadParams(groupId, path) {
        return this.createFileUploadParams(groupId, path);
    }
    static createFilePropertiesExecutable(name) {
        return new Executable(name, Executable.TYPE_FILE_PROPERTIES, new scriptfileuploadbody_1.ScriptFileUploadBody("$params.path")).setOutput(true);
    }
    static createFilePropertiesParams(groupId, path) {
        return this.createFileUploadParams(groupId, path);
    }
    static createFileHashExecutable(name) {
        return new Executable(name, Executable.TYPE_FILE_HASH, new scriptfileuploadbody_1.ScriptFileUploadBody("$params.path")).setOutput(true);
    }
    static createFileHashParams(groupId, path) {
        return this.createFileUploadParams(groupId, path);
    }
    static createInsertExecutable(colletion, body) {
        return new Executable(colletion, Executable.TYPE_INSERT, body).setOutput(true);
    }
    static createUpdateExecutable(collection, body) {
        return new Executable(collection, Executable.TYPE_UPDATE, body).setOutput(true);
    }
    static createDeleteExecutable(collection, body) {
        return new Executable(collection, Executable.TYPE_DELETE, body).setOutput(true);
    }
}
exports.Executable = Executable;
Executable.TYPE_FIND = "find";
Executable.TYPE_INSERT = "insert";
Executable.TYPE_UPDATE = "update";
Executable.TYPE_DELETE = "delete";
Executable.TYPE_FILE_UPLOAD = "fileUpload";
Executable.TYPE_FILE_DOWNLOAD = "fileDownload";
Executable.TYPE_FILE_PROPERTIES = "fileProperties";
Executable.TYPE_FILE_HASH = "fileHash";
//# sourceMappingURL=executable.js.map