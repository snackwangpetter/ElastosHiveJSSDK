import { FileInfo } from "../model/fileinfo";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class FilesListResponseBody extends HiveResponseBody {
    private fileInfoList;
    getFileInfoList(): FileInfo[];
}
