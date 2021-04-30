import { Post } from "pretend";
import { BaseApi } from "./baseapi";
import { CountDocRequestBody } from "./request/countdocrequestbody";
import { CreateCollectionRequestBody } from "./request/createcollectionrequestbody";
import { DeleteCollectionRequestBody } from "./request/deletecollectionrequestbody";
import { DeleteDocRequestBody } from "./request/deletedocrequestbody";
import { FindDocRequestBody } from "./request/finddocrequestbody";
import { FindDocsRequestBody } from "./request/finddocsrequestbody";
import { InsertDocRequestBody } from "./request/insertdocrequestbody";
import { InsertDocsRequestBody } from "./request/insertdocsrequestbody";
import { UpdateDocRequestBody } from "./request/updatedocrequestbody";
import { CountDocResponseBody } from "./response/countdocresponsebody";
import { DeleteDocResponseBody } from "./response/deletedocresponsebody";
import { FindDocResponseBody } from "./response/finddocresponsebody";
import { FindDocsResponseBody } from "./response/finddocsresponsebody";
import { HiveResponseBody } from "./response/hiveresponsebody";
import { InsertDocResponseBody } from "./response/insertdocresponsebody";
import { InsertDocsResponseBody } from "./response/insertdocsresponsebody";
import { UpdateDocResponseBody } from "./response/updatedocresponsebody";

export class DatabaseApi {
	@Post(BaseApi.API_VERSION + "/db/create_collection")
	createCollection(/* @Body */body: CreateCollectionRequestBody): Promise<HiveResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/delete_collection")
	deleteCollection(/* @Body */body: DeleteCollectionRequestBody): Promise<HiveResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/insert_one")
	insertOne(/* @Body */body: InsertDocRequestBody): Promise<InsertDocResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/insert_many")
	insertMany(/* @Body */body: InsertDocsRequestBody): Promise<InsertDocsResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/update_one")
	updateOne(/* @Body */body: UpdateDocRequestBody): Promise<UpdateDocResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/update_many")
	updateMany(/* @Body */body: UpdateDocRequestBody): Promise<UpdateDocResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/delete_one")
	deleteOne(/* @Body */body: DeleteDocRequestBody): Promise<DeleteDocResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/delete_many")
	deleteMany(/* @Body */body: DeleteDocRequestBody): Promise<DeleteDocResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/count_documents")
	countDocs(/* @Body */body: CountDocRequestBody): Promise<CountDocResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/find_one")
	findOne(/* @Body */body: FindDocRequestBody): Promise<FindDocResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/db/find_many")
	findMany(/* @Body */body: FindDocsRequestBody): Promise<FindDocsResponseBody> { return null; }
}
