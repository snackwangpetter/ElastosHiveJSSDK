export interface BackupContext {
	getType(): string;
	getParameter(key: string): string;
	getAuthorization(srcDid: string, targetDid: string, targetHost: string): Promise<string>;
}
