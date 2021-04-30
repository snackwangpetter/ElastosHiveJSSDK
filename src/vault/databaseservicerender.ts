import { CountOptions } from "../database/countoptions";
import { CreateCollectionOptions } from "../database/createcollectionoptions";
import { DeleteOptions } from "../database/deleteoptions";
import { DeleteResult } from "../database/deleteresult";
import { FindOptions } from "../database/findoptions";
import { InsertManyOptions } from "../database/insertmanyoptions";
import { InsertManyResult } from "../database/insertmanyresult";
import { InsertOneOptions } from "../database/insertoneoptions";
import { InsertOneResult } from "../database/insertoneresult";
import { UpdateOptions } from "../database/updateoptions";
import { UpdateResult } from "../database/updateresult";
import { CompletionException } from "../exception/unsupportedoperationexception";
import { JSONObject } from "../json";
import { CountDocRequestBody } from "../network/request/countdocrequestbody";
import { CreateCollectionRequestBody } from "../network/request/createcollectionrequestbody";
import { DeleteCollectionRequestBody } from "../network/request/deletecollectionrequestbody";
import { DeleteDocRequestBody } from "../network/request/deletedocrequestbody";
import { FindDocRequestBody } from "../network/request/finddocrequestbody";
import { FindDocsRequestBody } from "../network/request/finddocsrequestbody";
import { InsertDocRequestBody } from "../network/request/insertdocrequestbody";
import { InsertDocsRequestBody } from "../network/request/insertdocsrequestbody";
import { UpdateDocRequestBody } from "../network/request/updatedocrequestbody";
import { HiveResponseBody } from "../network/response/hiveresponsebody";
import { DatabaseService } from "../service/databaseservice";
import { Vault } from "../vault ";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";

export class DatabaseServiceRender extends HiveVaultRender implements DatabaseService, HttpExceptionHandler {
	public constructor(vault: Vault) {
		super(vault);
	}

	public createCollection(name: string, options: CreateCollectionOptions): Promise<boolean> {
		return this.promiseWithConvertedException<boolean>(()=>{
			HiveResponseBody.validateBody(
				this.getConnectionManager().getDatabaseApi()
						.createCollection(new CreateCollectionRequestBody(name))
						.execute()
						.body());
			return true;
		});
	}

	public deleteCollection(name: string): Promise<boolean> {
		return this.promiseWithConvertedException<boolean>(()=>{
			HiveResponseBody.validateBody(
					this.getConnectionManager().getDatabaseApi()
							.deleteCollection(new DeleteCollectionRequestBody(name))
							.execute()
							.body());
			return true;
		});
	}

	public insertOne(collection: string, doc: JSONObject, options: InsertOneOptions): Promise<InsertOneResult> {
		return this.promiseWithConvertedException<InsertOneResult>(()=>{
			let body = HiveResponseBody.validateBody(
					this.getConnectionManager().getDatabaseApi()
					.insertOne(new InsertDocRequestBody(collection,
							HiveResponseBody.jsonNode2KeyValueDic(doc),
							options))
					.execute()
					.body());
			return new InsertOneResult()
					.setInsertedId(body.getInsertedId())
					.setAcknowledged(body.getAcknowledged());
		});
	}

	public insertMany(collection: string, docs: JSONObject[], options: InsertManyOptions): Promise<InsertManyResult> {
		return this.promiseWithConvertedException<InsertManyResult>(()=>{
			let body = HiveResponseBody.validateBody(
					this.getConnectionManager().getDatabaseApi()
							.insertMany(new InsertDocsRequestBody(collection,
									HiveResponseBody.jsonNodeList2KeyValueDicList(docs),
									options))
							.execute()
							.body());
			return new InsertManyResult()
					.setInsertedIds(body.getInsertedIds())
					.setAcknowledged(body.getAcknowledged());
		});
	}

	public countDocuments(collection: string, query: JSONObject, options: CountOptions): Promise<number> {
		return this.promiseWithConvertedException<number>(()=>{
			return HiveResponseBody.validateBody(
					this.getConnectionManager().getDatabaseApi()
							.countDocs(new CountDocRequestBody(
									collection,
									HiveResponseBody.jsonNode2KeyValueDic(query),
									options))
							.execute()
							.body()).getCount();
		});
	}

	public findOne(collection: string, query: JSONObject, options: FindOptions): Promise<JSONObject> {
		return this.promiseWithConvertedException<JSONObject>(()=>{
			return HiveResponseBody.KeyValueDict2JsonNode(
					HiveResponseBody.validateBody(
							this.getConnectionManager().getDatabaseApi()
									.findOne(new FindDocRequestBody(collection,
											HiveResponseBody.jsonNode2KeyValueDic(query),
											options))
									.execute()
									.body()).getItem());
		});
	}

	public findMany(collection: string, query: JSONObject, options: FindOptions): Promise<JSONObject[]> {
		return this.promiseWithConvertedException<JSONObject[]>(()=>{
			return HiveResponseBody.KeyValueDictList2JsonNodeList(
					HiveResponseBody.validateBody(
						this.getConnectionManager().getDatabaseApi()
					.findMany(new FindDocsRequestBody(collection,
							HiveResponseBody.jsonNode2KeyValueDic(query),
							options))
					.execute()
					.body()).getItems());
		});
	}

	public updateOne(collection: string, filter: JSONObject, update: JSONObject, options: UpdateOptions): Promise<UpdateResult> {
		return this.promiseWithConvertedException<UpdateResult>(()=>{
			let body = HiveResponseBody.validateBody(
							this.getConnectionManager().getDatabaseApi()
									.updateOne(new UpdateDocRequestBody(collection)
										.setFilter(HiveResponseBody.jsonNode2KeyValueDic(filter))
										.setUpdate(HiveResponseBody.jsonNode2KeyValueDic(update))
									.setOptions(options))
									.execute()
									.body());
			return new UpdateResult()
					.setMatchedCount(body.getMatchedCount())
					.setModifiedCount(body.getModifiedCount())
					.setAcknowledged(body.getAcknowledged())
					.setUpsertedId(body.getUpsertedId());
		});
	}

	public updateMany(collection: string, filter: JSONObject, update: JSONObject, options: UpdateOptions): Promise<UpdateResult> {
		return this.promiseWithConvertedException<UpdateResult>(()=>{
			let body = HiveResponseBody.validateBody(
					this.getConnectionManager().getDatabaseApi()
							.updateMany(new UpdateDocRequestBody(collection)
									.setFilter(HiveResponseBody.jsonNode2KeyValueDic(filter))
									.setUpdate(HiveResponseBody.jsonNode2KeyValueDic(update))
									.setOptions(options))
							.execute()
							.body());
			return new UpdateResult()
					.setMatchedCount(body.getMatchedCount())
					.setModifiedCount(body.getModifiedCount())
					.setAcknowledged(body.getAcknowledged())
					.setUpsertedId(body.getUpsertedId());
		});
	}

	public deleteOne(collection: string, filter: JSONObject, options: DeleteOptions): Promise<DeleteResult> {
		return this.promiseWithConvertedException<DeleteResult>(()=>{
			let body = HiveResponseBody.validateBody(
					this.getConnectionManager().getDatabaseApi()
					.deleteOne(new DeleteDocRequestBody(collection,
							HiveResponseBody.jsonNode2KeyValueDic(filter)))
					.execute()
					.body());
			return new DeleteResult()
					.setDeletedCount(body.getDeletedCount())
					.setAcknowledged(body.getAcknowledged());
		});
	}

	public deleteMany(collection: string, filter: JSONObject, options: DeleteOptions): Promise<DeleteResult> {
		return this.promiseWithConvertedException<DeleteResult>(()=>{
			let body = HiveResponseBody.validateBody(
					this.getConnectionManager().getDatabaseApi()
							.deleteMany(new DeleteDocRequestBody(collection,
									HiveResponseBody.jsonNode2KeyValueDic(filter)))
							.execute()
							.body());
			return new DeleteResult()
					.setDeletedCount(body.getDeletedCount())
					.setAcknowledged(body.getAcknowledged());
		});
	}
}
