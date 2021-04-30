import { BackupContext } from "./backupcontext";
export declare abstract class CloudBackupContext implements BackupContext {
    getParameter(parameter: string): string;
    abstract getType(): string;
    abstract getAuthorization(srcDid: string, targetDid: string, targetHost: string): Promise<string>;
    abstract getClientId(): string;
    abstract getRedirectUrl(): string;
    abstract getAppScope(): string;
}
