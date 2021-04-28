/**
 *
 */
export interface AppContextProvider {
	getLocalDataDir(): string;
    getAppInstanceDocument(): DIDDocument;
    getAuthorization(jwtToken: string): Promise<string>;
}
