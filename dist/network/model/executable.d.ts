import { JSONObject } from "../../json";
import { Condition } from "./condition";
import { ScriptDeleteExecutableBody } from "./scriptdeleteexecutablebody";
export declare class Executable extends Condition {
    static TYPE_FIND: string;
    private static TYPE_INSERT;
    private static TYPE_UPDATE;
    private static TYPE_DELETE;
    private static TYPE_FILE_UPLOAD;
    private static TYPE_FILE_DOWNLOAD;
    private static TYPE_FILE_PROPERTIES;
    private static TYPE_FILE_HASH;
    private output;
    constructor(name: string, type: string, body: any);
    setOutput(output: boolean): Executable;
    static createFileUploadExecutable(name: string): Executable;
    static createFileUploadParams(groupId: string, path: string): JSONObject;
    static createFileDownloadExecutable(name: string): Executable;
    static createFileDownloadParams(groupId: string, path: string): JSONObject;
    static createFilePropertiesExecutable(name: string): Executable;
    static createFilePropertiesParams(groupId: string, path: string): JSONObject;
    static createFileHashExecutable(name: string): Executable;
    static createFileHashParams(groupId: string, path: string): JSONObject;
    static createInsertExecutable(colletion: string, body: ScriptDeleteExecutableBody): Executable;
    static createUpdateExecutable(collection: string, body: ScriptDeleteExecutableBody): Executable;
    static createDeleteExecutable(collection: string, body: ScriptDeleteExecutableBody): Executable;
}
