import { AppContextProvider } from "./appcontextprovider";
import { BadContextProviderException } from "./exception/badcontextproviderexception";
import { IllegalArgumentException } from "./exception/completionexception";
import { DIDResolverNotSetupException } from "./exception/didresolvernotsetupexception";
import { DIDResolverSetupException } from "./exception/didresolversetupexception";
import { IllegalDidFormatException } from "./exception/illegaldidformatexception";
import { ProviderNotFoundException } from "./exception/providernotfoundexception";
import { ProviderNotSetException } from "./exception/providernotsetexception";

/**
 * The application context would contain the resources list below:
 *  - the reference of application context provider;
 *  -
 *
 */
export class AppContext {
	private static resolverHasSetup: boolean = false;

	private contextProvider: AppContextProvider;
	private userDid: string = null;

	private constructor(provider: AppContextProvider, userDid: string = null) {
		this.userDid = userDid;
		this.contextProvider = provider;
	}

	public static setupResolver(resolver: string, cacheDir: string) {
		if (cacheDir == null || resolver == null)
			throw new IllegalArgumentException("invalid value for parameter resolver or cacheDir");

		if (AppContext.resolverHasSetup)
			throw new DIDResoverAlreadySetupException();

		try {
			DIDBackend.initialize(resolver, cacheDir);
			ResolverCache.reset();
			resolverHasSetup = true;
		} catch (e) {
			// DIDResolveException
			throw new DIDResolverSetupException(e.getMessage());
		}
	}

	public getAppContextProvider(): AppContextProvider {
		return this.contextProvider;
	}

	public getUserDid(): string {
		return this.userDid;
	}

	public static build(provider: AppContextProvider, userDid: string = null): AppContext {
		if (provider == null)
			throw new IllegalArgumentException("Missing AppContext provider");

		if (provider.getLocalDataDir() == null)
			throw new BadContextProviderException("Missing method to acquire data location");

		if (provider.getAppInstanceDocument() == null)
			throw new BadContextProviderException("Missing method to acquire App instance DID document");

		if (!AppContext.resolverHasSetup)
			throw new DIDResolverNotSetupException();

		return new AppContext(provider, userDid);
	}

	public static getProviderAddress(targetDid: string, preferredProviderAddress: string = null): Promise<string> {
		if (targetDid == null)
			throw new IllegalArgumentException("Missing input parameter for target Did");

		return new Promise((resolve, reject)=>{
			// Prioritize the use of external input value for 'preferredProviderAddress';
			if (preferredProviderAddress != null)
				return preferredProviderAddress;

			try {
				let services: DIDDocument.Service[] = null;
				let did = new DID(targetDid);
				let doc: DIDDocument;

				doc = did.resolve();
				if (doc == null)
					throw new ProviderNotFoundException(
						"DID "+targetDid+" is not published on the ID side chain");

				services = doc.selectServices(null, "HiveVault");
				if (services == null || services.length == 0)
					throw new ProviderNotSetException(
						"No 'HiveVault' services declared on DID document "+targetDid);

				/*
				 * TODO: should we throw special exception when it has more than one end-point
				 * of service "HiveVault";
				 */
				return services[0].getServiceEndpoint();
			} catch (e) {
				if (e instanceof MalformedDIDException)
					throw new IllegalDidFormatException("Bad target did: " + targetDid);
				else {
					// DIDResolveException
					// throw new CompletionException(new HiveException(e.getLocalizedMessage()));
					// TODO:
					return null;
				}
			}
		});
	}
}
