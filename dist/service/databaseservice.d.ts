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
    createCollection(name: string, options: CreateCollectionOptions): Promise<boolean>;
    deleteCollection(name: string): Promise<boolean>;
    insertOne(collection: string, doc: JSONObject, options: InsertOneOptions): Promise<InsertOneResult>;
    insertMany(collection: string, docs: JSONObject[], options: InsertManyOptions): Promise<InsertManyResult>;
    countDocuments(collection: string, query: JSONObject, options: CountOptions): Promise<number>;
    findOne(collection: string, query: JSONObject, options: FindOptions): Promise<JSONObject>;
    findMany(collection: string, query: JSONObject, options: FindOptions): Promise<JSONObject[]>;
    updateOne(collection: string, filter: JSONObject, update: JSONObject, options: UpdateOptions): Promise<UpdateResult>;
    updateMany(collection: string, filter: JSONObject, update: JSONObject, options: UpdateOptions): Promise<UpdateResult>;
    deleteOne(collection: string, filter: JSONObject, options: DeleteOptions): Promise<DeleteResult>;
    deleteMany(collection: string, filter: JSONObject, options: DeleteOptions): Promise<DeleteResult>;
}