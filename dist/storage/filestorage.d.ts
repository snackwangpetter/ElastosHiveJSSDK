import { DataStorage } from "./datastorage";
export declare class FileStorage implements DataStorage {
    loadBackupCredential(serviceDid: string): string;
    loadSignInCredential(): string;
    loadAccessToken(serviceDid: any): string;
    loadAccessTokenByAddress(providerAddress: string): string;
    storeBackupCredential(serviceDid: string, credential: string): void;
    storeSignInCredential(credential: string): void;
    storeAccessToken(serviceDid: string, accessToken: string): void;
    storeAccessTokenByAddress(serviceDid: string, providerAddress: string): void;
}
