import { HiveSdkException } from "../../exception/exception";
import { JSONObject } from "../../json";
import { Condition } from "./condition";
import { ScriptDeleteExecutableBody } from "./scriptdeleteexecutablebody";
import { ScriptFileUploadBody } from "./scriptfileuploadbody";

export class Executable extends Condition {
	public static TYPE_FIND = "find";
	private static TYPE_INSERT = "insert";
	private static TYPE_UPDATE = "update";
	private static TYPE_DELETE = "delete";
	private static TYPE_FILE_UPLOAD = "fileUpload";
	private static TYPE_FILE_DOWNLOAD = "fileDownload";
	private static TYPE_FILE_PROPERTIES = "fileProperties";
	private static TYPE_FILE_HASH = "fileHash";

	// TODO JAVA @SerializedName("output")
	private output: boolean;

	public constructor(name: string, type: string, body: any) {
		super(name, type, body);
	}

	public setOutput(output: boolean): Executable {
		this.output = output;
		return this;
	}

	public static createFileUploadExecutable(name: string): Executable {
		return new Executable(name, Executable.TYPE_FILE_UPLOAD,
				new ScriptFileUploadBody("$params.path")).setOutput(true);
	}

	public static createFileUploadParams(groupId: string, path: string): JSONObject {
		try {
			return new ObjectMapper().readTree(String.format("{\"group_id\":{\"$oid\":\"%s\"},\"path\":\"%s\"}", groupId, path));
		} catch (e) {
			throw new HiveSdkException("invalid groupId or path");
		}
	}

	public static createFileDownloadExecutable(name: string): Executable {
		return new Executable(name, Executable.TYPE_FILE_DOWNLOAD,
				new ScriptFileUploadBody("$params.path")).setOutput(true);
	}

	public static createFileDownloadParams(groupId: string, path: string): JSONObject {
		return this.createFileUploadParams(groupId, path);
	}

	public static createFilePropertiesExecutable(name: string): Executable {
		return new Executable(name, Executable.TYPE_FILE_PROPERTIES,
				new ScriptFileUploadBody("$params.path")).setOutput(true);
	}

	public static createFilePropertiesParams(groupId: string, path: string): JSONObject {
		return this.createFileUploadParams(groupId, path);
	}

	public static createFileHashExecutable(name: string): Executable {
		return new Executable(name, Executable.TYPE_FILE_HASH,
				new ScriptFileUploadBody("$params.path")).setOutput(true);
	}

	public static createFileHashParams(groupId: string, path: string): JSONObject {
		return this.createFileUploadParams(groupId, path);
	}

	public static createInsertExecutable(colletion: string, body: ScriptDeleteExecutableBody): Executable {
		return new Executable(colletion, Executable.TYPE_INSERT, body).setOutput(true);
	}

	public static createUpdateExecutable(collection: string, body: ScriptDeleteExecutableBody): Executable {
		return new Executable(collection, Executable.TYPE_UPDATE, body).setOutput(true);
	}

	public static createDeleteExecutable(collection: string, body: ScriptDeleteExecutableBody): Executable {
		return new Executable(collection, Executable.TYPE_DELETE, body).setOutput(true);
	}
}
