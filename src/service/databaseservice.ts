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
import { JSONObject } from "../json";

export interface DatabaseService {
	/**
	 * Lets the vault owner create a collection on database.
	 * @param name the collection name
	 * @return fail(false) or success(treu)
	 */
	createCollection(name: string, options: CreateCollectionOptions): Promise<boolean>;


	/**
	 * Lets the vault owner delete a collection on database according to collection name.
	 * @param name the collection name
	 * @return fail(false) or success(true)
	 */
	deleteCollection(name: string): Promise<boolean>;


	/**
	 * Insert a new document in a given collection
	 * @param collection the collection name
	 * @param doc The document to insert. Must be a mutable mapping type. If
	 *            the document does not have an _id field one will be added automatically
	 * @param options bypass_document_validation: (optional) If True, allows
	 *                the write to opt-out of document level validation. Default is False.
	 * @return Results returned by {@link InsertOneResult} wrapper
	 */
	insertOne(collection: string, doc: JSONObject, options: InsertOneOptions): Promise<InsertOneResult>;


	/**
	 * Insert many new documents in a given collection
	 * @param collection the collection name
	 * @param docs The document to insert. Must be a mutable mapping type. If the
	 *             document does not have an _id field one will be added automatically.
	 * @param options ordered (optional): If True (the default) documents will be inserted on the server serially,
	 *                in the order provided. If an error occurs all remaining inserts are aborted. If False, documents
	 *                will be inserted on the server in arbitrary order, possibly in parallel, and all document inserts will be attempted.
	 *                bypass_document_validation: (optional) If True, allows the write to opt-out of document level validation. Default is False.
	 * @return Results returned by {@link InsertManyResult} wrapper
	 */
	insertMany(collection: string, docs: JSONObject[], options: InsertManyOptions): Promise<InsertManyResult>;

	/**
	 * Count documents
	 * @param collection the collection name
	 * @param query The document of filter
	 * @param options
	 *              skip (int): The number of matching documents to skip before returning results.
	 *              limit (int): The maximum number of documents to count. Must be a positive integer. If not provided, no limit is imposed.
	 *              maxTimeMS (int): The maximum amount of time to allow this operation to run, in milliseconds.
	 * @return count size
	 */
	countDocuments(collection: string, query: JSONObject, options: CountOptions): Promise<number>;


	/**
	 * Find a specific document
	 * @param collection the collection name
	 * @param query optional, a JSON object specifying elements which must be present for a document to be included in the result set
	 * @param options optional,refer to {@link FindOptions}
	 * @return a JSON object document result
	 */
	findOne(collection: string, query: JSONObject, options: FindOptions): Promise<JSONObject>;

	/**
	 * Find many documents
	 * @param collection the collection name
	 * @param query optional, a JSON object specifying elements which must be present for a document to be included in the result set
	 * @param options optional,refer to {@link FindOptions}
	 * @return a JsonNode array result of document
	 */
	findMany(collection: string, query: JSONObject, options: FindOptions): Promise<JSONObject[]>;

	/**
	 * Update an existing document in a given collection
	 * @param collection the collection name
	 * @param filter A query that matches the document to update.
	 * @param update The modifications to apply.
	 * @param options optional, refer to {@link UpdateOptions}
	 * @return Results returned by {@link UpdateResult} wrapper
	 */
	updateOne(collection: string, filter: JSONObject, update: JSONObject, options: UpdateOptions): Promise<UpdateResult>;


	/**
	 * Update many existing documents in a given collection
	 * @param collection the collection name
	 * @param filter A query that matches the document to update.
	 * @param update The modifications to apply.
	 * @param options optional, refer to {@link UpdateOptions}
	 * @return Results returned by {@link UpdateResult} wrapper
	 */
	updateMany(collection: string, filter: JSONObject, update: JSONObject, options: UpdateOptions): Promise<UpdateResult>;


	/**
	 * Delete an existing document in a given collection
	 * @param collection the collection name
	 * @param filter A query that matches the document to delete.
	 * @param options
	 * @return
	 */
	deleteOne(collection: string, filter: JSONObject, options: DeleteOptions): Promise<DeleteResult>;


	/**
	 * Delete many existing documents in a given collection
	 * @param collection the collection name
	 * @param filter A query that matches the document to delete.
	 * @param options
	 * @return
	 */
	deleteMany(collection: string, filter: JSONObject, options: DeleteOptions): Promise<DeleteResult>;
}