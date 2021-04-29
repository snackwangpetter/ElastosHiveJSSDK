import { FileInfo } from "../model/fileinfo";
import { HiveResponseBody } from "./hiveresponsebody";

export class FilesListResponseBody extends HiveResponseBody {
    // TODO JAVA @SerializedName("file_info_list")
    private fileInfoList: FileInfo[];

    public getFileInfoList(): FileInfo[] {
        return this.fileInfoList;
    }

}
