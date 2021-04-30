"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = void 0;
const badcontextproviderexception_1 = require("./exception/badcontextproviderexception");
const completionexception_1 = require("./exception/completionexception");
const didresolvernotsetupexception_1 = require("./exception/didresolvernotsetupexception");
const didresolversetupexception_1 = require("./exception/didresolversetupexception");
const illegaldidformatexception_1 = require("./exception/illegaldidformatexception");
const providernotfoundexception_1 = require("./exception/providernotfoundexception");
const providernotsetexception_1 = require("./exception/providernotsetexception");
class AppContext {
    constructor(provider, userDid = null) {
        this.userDid = null;
        this.userDid = userDid;
        this.contextProvider = provider;
    }
    static setupResolver(resolver, cacheDir) {
        if (cacheDir == null || resolver == null)
            throw new completionexception_1.IllegalArgumentException("invalid value for parameter resolver or cacheDir");
        if (AppContext.resolverHasSetup)
            throw new DIDResoverAlreadySetupException();
        try {
            DIDBackend.initialize(resolver, cacheDir);
            ResolverCache.reset();
            resolverHasSetup = true;
        }
        catch (e) {
            throw new didresolversetupexception_1.DIDResolverSetupException(e.getMessage());
        }
    }
    getAppContextProvider() {
        return this.contextProvider;
    }
    getUserDid() {
        return this.userDid;
    }
    static build(provider, userDid = null) {
        if (provider == null)
            throw new completionexception_1.IllegalArgumentException("Missing AppContext provider");
        if (provider.getLocalDataDir() == null)
            throw new badcontextproviderexception_1.BadContextProviderException("Missing method to acquire data location");
        if (provider.getAppInstanceDocument() == null)
            throw new badcontextproviderexception_1.BadContextProviderException("Missing method to acquire App instance DID document");
        if (!AppContext.resolverHasSetup)
            throw new didresolvernotsetupexception_1.DIDResolverNotSetupException();
        return new AppContext(provider, userDid);
    }
    static getProviderAddress(targetDid, preferredProviderAddress = null) {
        if (targetDid == null)
            throw new completionexception_1.IllegalArgumentException("Missing input parameter for target Did");
        return new Promise((resolve, reject) => {
            if (preferredProviderAddress != null)
                return preferredProviderAddress;
            try {
                let services = null;
                let did = new DID(targetDid);
                let doc;
                doc = did.resolve();
                if (doc == null)
                    throw new providernotfoundexception_1.ProviderNotFoundException(String.format("The DID %s has not published onto sideChain", targetDid));
                services = doc.selectServices(null, "HiveVault");
                if (services == null || services.size() == 0)
                    throw new providernotsetexception_1.ProviderNotSetException(String.format("No 'HiveVault' services declared on DID document %s", targetDid));
                return services.get(0).getServiceEndpoint();
            }
            catch (e) {
                throw new illegaldidformatexception_1.IllegalDidFormatException("Bad target did: " + targetDid);
            }
            try { }
            catch (e) {
                return null;
            }
        });
    }
}
exports.AppContext = AppContext;
AppContext.resolverHasSetup = false;
//# sourceMappingURL=appcontext.js.map