import { Version } from "./version";

/**
 * Get version information for services.
 */
export interface VersionService {
    /**
     * Get version information for service.
     *
     * @return version information
     */
    getVersion(): Version;

    /**
     * Get last commit id of git for service source code.
     *
     * @return last commit id
     */
    getLastCommitId(): string;
}
