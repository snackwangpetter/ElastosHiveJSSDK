export interface DataStorage {
	loadBackupCredential(serviceDid: string): string;
	loadSignInCredential(): string;
	loadAccessToken(serviceDid: string): string;
	loadAccessTokenByAddress(providerAddress: string): string;

	storeBackupCredential(serviceDid: string, credential: string);
	storeSignInCredential(credential: string);
	storeAccessToken(serviceDid: string, accessToken: string);
	storeAccessTokenByAddress(serviceDid: string, providerAddress: string);
}
