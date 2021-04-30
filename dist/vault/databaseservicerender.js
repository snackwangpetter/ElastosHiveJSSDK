"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseServiceRender = void 0;
const deleteresult_1 = require("../database/deleteresult");
const insertmanyresult_1 = require("../database/insertmanyresult");
const insertoneresult_1 = require("../database/insertoneresult");
const updateresult_1 = require("../database/updateresult");
const countdocrequestbody_1 = require("../network/request/countdocrequestbody");
const createcollectionrequestbody_1 = require("../network/request/createcollectionrequestbody");
const deletecollectionrequestbody_1 = require("../network/request/deletecollectionrequestbody");
const deletedocrequestbody_1 = require("../network/request/deletedocrequestbody");
const finddocrequestbody_1 = require("../network/request/finddocrequestbody");
const finddocsrequestbody_1 = require("../network/request/finddocsrequestbody");
const insertdocrequestbody_1 = require("../network/request/insertdocrequestbody");
const insertdocsrequestbody_1 = require("../network/request/insertdocsrequestbody");
const updatedocrequestbody_1 = require("../network/request/updatedocrequestbody");
const hiveresponsebody_1 = require("../network/response/hiveresponsebody");
const hivevaultrender_1 = require("./hivevaultrender");
class DatabaseServiceRender extends hivevaultrender_1.HiveVaultRender {
    constructor(vault) {
        super(vault);
    }
    createCollection(name, options) {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .createCollection(new createcollectionrequestbody_1.CreateCollectionRequestBody(name))
                .execute()
                .body());
            return true;
        });
    }
    deleteCollection(name) {
        return this.promiseWithConvertedException(() => {
            hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .deleteCollection(new deletecollectionrequestbody_1.DeleteCollectionRequestBody(name))
                .execute()
                .body());
            return true;
        });
    }
    insertOne(collection, doc, options) {
        return this.promiseWithConvertedException(() => {
            let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .insertOne(new insertdocrequestbody_1.InsertDocRequestBody(collection, hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(doc), options))
                .execute()
                .body());
            return new insertoneresult_1.InsertOneResult()
                .setInsertedId(body.getInsertedId())
                .setAcknowledged(body.getAcknowledged());
        });
    }
    insertMany(collection, docs, options) {
        return this.promiseWithConvertedException(() => {
            let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .insertMany(new insertdocsrequestbody_1.InsertDocsRequestBody(collection, hiveresponsebody_1.HiveResponseBody.jsonNodeList2KeyValueDicList(docs), options))
                .execute()
                .body());
            return new insertmanyresult_1.InsertManyResult()
                .setInsertedIds(body.getInsertedIds())
                .setAcknowledged(body.getAcknowledged());
        });
    }
    countDocuments(collection, query, options) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .countDocs(new countdocrequestbody_1.CountDocRequestBody(collection, hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(query), options))
                .execute()
                .body()).getCount();
        });
    }
    findOne(collection, query, options) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.KeyValueDict2JsonNode(hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .findOne(new finddocrequestbody_1.FindDocRequestBody(collection, hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(query), options))
                .execute()
                .body()).getItem());
        });
    }
    findMany(collection, query, options) {
        return this.promiseWithConvertedException(() => {
            return hiveresponsebody_1.HiveResponseBody.KeyValueDictList2JsonNodeList(hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .findMany(new finddocsrequestbody_1.FindDocsRequestBody(collection, hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(query), options))
                .execute()
                .body()).getItems());
        });
    }
    updateOne(collection, filter, update, options) {
        return this.promiseWithConvertedException(() => {
            let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .updateOne(new updatedocrequestbody_1.UpdateDocRequestBody(collection)
                .setFilter(hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(filter))
                .setUpdate(hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(update))
                .setOptions(options))
                .execute()
                .body());
            return new updateresult_1.UpdateResult()
                .setMatchedCount(body.getMatchedCount())
                .setModifiedCount(body.getModifiedCount())
                .setAcknowledged(body.getAcknowledged())
                .setUpsertedId(body.getUpsertedId());
        });
    }
    updateMany(collection, filter, update, options) {
        return this.promiseWithConvertedException(() => {
            let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .updateMany(new updatedocrequestbody_1.UpdateDocRequestBody(collection)
                .setFilter(hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(filter))
                .setUpdate(hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(update))
                .setOptions(options))
                .execute()
                .body());
            return new updateresult_1.UpdateResult()
                .setMatchedCount(body.getMatchedCount())
                .setModifiedCount(body.getModifiedCount())
                .setAcknowledged(body.getAcknowledged())
                .setUpsertedId(body.getUpsertedId());
        });
    }
    deleteOne(collection, filter, options) {
        return this.promiseWithConvertedException(() => {
            let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .deleteOne(new deletedocrequestbody_1.DeleteDocRequestBody(collection, hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(filter)))
                .execute()
                .body());
            return new deleteresult_1.DeleteResult()
                .setDeletedCount(body.getDeletedCount())
                .setAcknowledged(body.getAcknowledged());
        });
    }
    deleteMany(collection, filter, options) {
        return this.promiseWithConvertedException(() => {
            let body = hiveresponsebody_1.HiveResponseBody.validateBody(this.getConnectionManager().getDatabaseApi()
                .deleteMany(new deletedocrequestbody_1.DeleteDocRequestBody(collection, hiveresponsebody_1.HiveResponseBody.jsonNode2KeyValueDic(filter)))
                .execute()
                .body());
            return new deleteresult_1.DeleteResult()
                .setDeletedCount(body.getDeletedCount())
                .setAcknowledged(body.getAcknowledged());
        });
    }
}
exports.DatabaseServiceRender = DatabaseServiceRender;
//# sourceMappingURL=databaseservicerender.js.map