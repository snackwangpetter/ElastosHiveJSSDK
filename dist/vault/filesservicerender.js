"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesServiceRender = void 0;
const filedoesnotexistexception_1 = require("../exception/filedoesnotexistexception");
const httpfailedexception_1 = require("../exception/httpfailedexception");
const filesapi_1 = require("../network/filesapi");
const filescopyrequestbody_1 = require("../network/request/filescopyrequestbody");
const filesdeleterequestbody_1 = require("../network/request/filesdeleterequestbody");
const filesmoverequestbody_1 = require("../network/request/filesmoverequestbody");
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const hivevaultrender_1 = require("./hivevaultrender");
const httpexceptionhandler_1 = require("./httpexceptionhandler");
class FilesServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(vault) {
        super(vault);
    }
    upload(path, resultType) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.getRequestStream(this.getConnectionManager().openConnection(filesapi_1.FilesApi.API_UPLOAD + "/" + path), resultType);
        });
    }
    list(path) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getFilesApi()
                .list(path)
                .execute()
                .body()).getFileInfoList();
        });
    }
    stat(path) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getFilesApi()
                .properties(path)
                .execute().body()).getFileInfo();
        });
    }
    download(path, resultType) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.getResponseStream(this.getConnectionManager().getFilesApi()
                .download(path)
                .execute(), resultType);
        });
    }
    delete(path) {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getFilesApi()
                .delete(new filesdeleterequestbody_1.FilesDeleteRequestBody(path))
                .execute().body());
            return true;
        });
    }
    move(source, target) {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getFilesApi()
                .move(new filesmoverequestbody_1.FilesMoveRequestBody(source, target))
                .execute().body());
            return true;
        });
    }
    copy(source, target) {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getFilesApi()
                .copy(new filescopyrequestbody_1.FilesCopyRequestBody(source, target))
                .execute().body());
            return true;
        });
    }
    hash(path) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getFilesApi()
                .hash(path)
                .execute()
                .body()).getSha256();
        });
    }
    convertException(e) {
        if (e instanceof httpfailedexception_1.HttpFailedException) {
            let ex = e;
            if (ex.getCode() == 404)
                return new filedoesnotexistexception_1.FileDoesNotExistException();
        }
        return httpexceptionhandler_1.HttpExceptionHandler.super.convertException(e);
    }
}
exports.FilesServiceRender = FilesServiceRender;
//# sourceMappingURL=filesservicerender.js.map