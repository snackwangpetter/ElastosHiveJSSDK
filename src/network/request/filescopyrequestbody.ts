import { FilesMoveRequestBody } from "./filesmoverequestbody";

export class FilesCopyRequestBody extends FilesMoveRequestBody {
    public constructor(srcPath: string, dstPath: string) {
        super(srcPath, dstPath);
    }
}
