import { FileInfo } from "../model/fileinfo";
import { HiveResponseBody } from "./hiveresponsebody";

export class FilesPropertiesResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("type")
    private type: string;
    // TODO JAVA @SerializedName("name")
    private name: string;
    // TODO JAVA @SerializedName("size")
    private size: number;
    // TODO JAVA @SerializedName("last_modify")
    private lastModify: number;

    public getFileInfo(): FileInfo {
        let info = new FileInfo();
        info.setType(this.type);
        info.setName(this.name);
        info.setSize(this.size);
        info.setLastModify(this.lastModify);
        return info;
    }
}
