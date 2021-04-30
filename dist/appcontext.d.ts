import { AppContextProvider } from "./appcontextprovider";
export declare class AppContext {
    private static resolverHasSetup;
    private contextProvider;
    private userDid;
    private constructor();
    static setupResolver(resolver: string, cacheDir: string): void;
    getAppContextProvider(): AppContextProvider;
    getUserDid(): string;
    static build(provider: AppContextProvider, userDid?: string): AppContext;
    static getProviderAddress(targetDid: string, preferredProviderAddress?: string): Promise<string>;
}
