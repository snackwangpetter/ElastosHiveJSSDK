import { Condition } from "./condition";

export class ExecutableType {
    public static AGGREGATED = "aggregated";
    public static FIND = "find";
    public static INSERT = "insert";
    public static UPDATE = "update";
    public static DELETE = "delete";
    public static FILE_UPLOAD = "fileUpload";
    public static FILE_DOWNLOAD = "fileDownload";
    public static FILE_PROPERTIES = "fileProperties";
    public static FILE_HASH = "fileHash";
}
export class Executable extends Condition {

    output: boolean;
   
    constructor(name: string, type: ExecutableType, body: any) {
        super(name, type as string, body);
    }

    public setOutput(output: boolean): Executable  {
        this.output = output;
        return this;
    }

    public static createRunFileParams(path: string) : any {
		let node = {"path": path};
		return node;
	}
}

export class ExecutableDatabaseBody {
    collection: string;
    constructor(collection: string) {
        this.collection = collection;
    }
}

export class ExecutableFileBody {
    private path: string;

    public FileBody() {
        this.path = "$params.path";
    }
}
