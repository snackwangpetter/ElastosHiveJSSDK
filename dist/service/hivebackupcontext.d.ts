import { BackupContext } from "./backupcontext";
export declare abstract class HiveBackupContext implements BackupContext {
    getParameter(parameter: string): string;
    abstract getTargetProviderAddress(): string;
    abstract getTargetServiceDid(): string;
    abstract getType(): string;
    abstract getAuthorization(srcDid: string, targetDid: string, targetHost: string): Promise<string>;
}
