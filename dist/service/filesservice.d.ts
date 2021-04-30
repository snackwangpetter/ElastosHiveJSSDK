import { FileInfo } from "../network/model/fileinfo";
export interface FilesService {
    upload<T>(path: string, resultType: any): Promise<T>;
    download<T>(path: string, resultType: any): Promise<T>;
    delete(path: string): Promise<boolean>;
    move(source: string, target: string): Promise<boolean>;
    copy(source: string, target: string): Promise<boolean>;
    hash(path: string): Promise<string>;
    list(path: string): Promise<FileInfo[]>;
    stat(path: string): Promise<FileInfo>;
}
