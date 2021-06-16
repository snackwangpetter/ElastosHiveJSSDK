import path from "node:path";
import { HiveSdkException } from "../exception/exception";
import { CryptoUtil } from "../utils/cryptoutil";
import { LogUtil } from "../utils/logutil";
import { AuthToken } from "./authtoken";
import { TokenResolver } from "./tokenresolver";

export class LocalResolver implements TokenResolver {
	public static TYPE_AUTH_TOKEN = "auth_token";
	public static TYPE_BACKUP_CREDENTIAL = "backup_credential";

	private static TOKEN_FOLDER = "/tokens";

	private type: string;
	private tokenPath: string;
	private nextResolver: TokenResolver;
	private token: AuthToken;

	public constructor(userDid: string, providerAddress: string, type: string, cacheDir: string) {
		this.type = type;
		let rootDir: string = cacheDir + TOKEN_FOLDER;
		File root = new File(rootDir);

		if (!root.exists() && !root.mkdirs()) {
			throw new HiveSdkException("Cannot create token root path.");
		}
		this.tokenPath = String.format("%s/%s", rootDir, CryptoUtil.getSHA256(userDid + providerAddress + type));
	}

	public async getToken(): Promise<AuthToken> {
		if (this.token == null)
			this.token = this.restoreToken();

		if (this.token == null || this.token.isExpired()) {
			this.token = await this.nextResolver.getToken();
			this.saveToken(this.token);
		}

		return this.token;
	}

	public invalidateToken() {
		if (this.token != null) {
			this.token = null;
			this.clearToken();
		}
	}

	public setNextResolver(resolver: TokenResolver) {
		this.nextResolver = resolver;
	}

	private restoreToken(): AuthToken {
		Path path = Paths.get(tokenPath);

		if (!Files.exists(path))
			return null;

		try {
			LogUtil.d(null, "Restore access token  from local cache");
			return new Gson().fromJson(new String(Files.readAllBytes(path)), AuthToken.class);
		} catch (e) {
			LogUtil.e(null, "Failed to restore access token from local cache");
			return null;
		}
	}

	private saveToken(token: AuthToken) {
		Path path = Paths.get(tokenPath);

		if (!Files.exists(path)) {
			// TODO: create path.
		}

		try {
			Files.write(path, new Gson().toJson(token).getBytes(StandardCharsets.UTF_8));
		} catch (e) {
			LogUtil.e(null, "Failed to save access token to local cache");
			
		}
	}

	private clearToken() {
		try {
			Files.deleteIfExists(Paths.get(tokenPath));
		} catch (e) {
			
		}
	}
}
