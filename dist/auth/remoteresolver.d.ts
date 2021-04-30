import { ServiceEndpoint } from "../serviceendpoint";
import { AuthToken } from "./authtoken";
import { TokenResolver } from "./tokenresolver";
export declare class RemoteResolver implements TokenResolver {
    private contextProvider;
    private authenticationService;
    constructor(serviceEndpoint: ServiceEndpoint);
    getToken(): Promise<AuthToken>;
    invalidateToken(): void;
    setNextResolver(resolver: TokenResolver): void;
}
