
import { DIDDocument } from "@elastosfoundation/did-js-sdk";
/**
 *
 */
export interface AppContextProvider {
	getLocalDataDir(): string;
    getAppInstanceDocument(): DIDDocument;
    getAuthorization(jwtToken: string): Promise<string>;
}
