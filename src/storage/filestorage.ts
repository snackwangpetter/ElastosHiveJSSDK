import { DataStorage } from "./datastorage";

export class FileStorage implements DataStorage {
	public loadBackupCredential(serviceDid: string): string {
		// TODO Auto-generated method stub
		return null;
	}

	public loadSignInCredential(): string {
		// TODO Auto-generated method stub
		return null;
	}

	public loadAccessToken(serviceDid): string {
		// TODO Auto-generated method stub
		return null;
	}

	public loadAccessTokenByAddress(providerAddress: string): string {
		// TODO Auto-generated method stub
		return null;
	}

	public storeBackupCredential(serviceDid: string, credential: string) {
		// TODO Auto-generated method stub
	}

	public storeSignInCredential(credential: string) {
		// TODO Auto-generated method stub
	}

	public storeAccessToken(serviceDid: string, accessToken: string) {
		// TODO Auto-generated method stub
	}

	public storeAccessTokenByAddress(serviceDid: string, providerAddress: string) {
		// TODO Auto-generated method stub
	}
}
