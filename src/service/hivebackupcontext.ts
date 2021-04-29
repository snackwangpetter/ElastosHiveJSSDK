export abstract class HiveBackupContext implements BackupContext {
	public getParameter(parameter: string): string {
		switch (parameter) {
		case "targetAddress":
			return this.getTargetProviderAddress();

		case "targetServiceDid":
			return this.getTargetServiceDid();
		}
		return null;
	}

	public abstract getTargetProviderAddress(): string;
	public abstract getTargetServiceDid(): string;
}
