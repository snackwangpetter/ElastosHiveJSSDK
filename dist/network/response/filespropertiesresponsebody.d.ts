import { FileInfo } from "../model/fileinfo";
import { HiveResponseBody } from "./hiveresponsebody";
export declare class FilesPropertiesResponseBody extends HiveResponseBody {
    private type;
    private name;
    private size;
    private lastModify;
    getFileInfo(): FileInfo;
}
