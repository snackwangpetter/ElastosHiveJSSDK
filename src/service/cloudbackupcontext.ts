import { BackupContext } from "./backupcontext";

export abstract class CloudBackupContext implements BackupContext {
	public getParameter(parameter: string): string {
		switch(parameter) {
		case "clientId":
			return this.getClientId();

		case "redirectUrl":
			return this.getRedirectUrl();

		case "scope":
			return this.getAppScope();
		}

		return null;
	}

	public abstract getType(): string;
	public abstract getAuthorization(srcDid: string, targetDid: string, targetHost: string): Promise<string>;
	public abstract getClientId(): string;
	public abstract getRedirectUrl(): string;
	public abstract getAppScope(): string;
}
