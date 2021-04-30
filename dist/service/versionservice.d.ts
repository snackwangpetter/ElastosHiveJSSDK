import { Version } from "./version";
export interface VersionService {
    getVersion(): Version;
    getLastCommitId(): string;
}
