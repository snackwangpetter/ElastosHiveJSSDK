export interface DataStorage {
    loadBackupCredential(serviceDid: string): string;
    loadSignInCredential(): string;
    loadAccessToken(serviceDid: string): string;
    loadAccessTokenByAddress(providerAddress: string): string;
    storeBackupCredential(serviceDid: string, credential: string): any;
    storeSignInCredential(credential: string): any;
    storeAccessToken(serviceDid: string, accessToken: string): any;
    storeAccessTokenByAddress(serviceDid: string, providerAddress: string): any;
}
