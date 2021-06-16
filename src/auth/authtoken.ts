import { Exception } from "../exception/exception"
import { LogUtil } from "../utils/logutil";

export class AuthToken {
	public static TYPE_TOKEN = "token";
	public static TYPE_BACKUP = "backup";

	private accessToken: string;
	private expiresTime: number;
	private tokenType: string;

	public constructor(accessToken: string, expiresTime: number, tokenType: string) {
		this.accessToken = accessToken;
		this.expiresTime = expiresTime;
		this.tokenType = tokenType;
	}

	public getAccessToken(): string {
		return this.accessToken;
	}

	public getExpiresTime(): number {
		return this.expiresTime;
	}

	public getTokenType(): string {
		return this.tokenType;
	}

	public getCanonicalizedAccessToken(): string {
		return this.tokenType + " " + this.accessToken;
	}

	public isExpired(): boolean {
		if (AuthToken.TYPE_BACKUP === this.tokenType) {
			return this.isBackupExpired();
		}
		return new Date().getTime() >= (this.expiresTime * 1000);
	}

	private isBackupExpired(): boolean {
		try {
			return VerifiableCredential.fromJson(this.accessToken).isExpired();
		} catch (e) {
			LogUtil.e(null, "Failed to check backup credential with message:" + e);
			return true;
		}
	}
}
