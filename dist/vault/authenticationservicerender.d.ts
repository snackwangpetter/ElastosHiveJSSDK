import { AuthToken } from "../auth/authtoken";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";
export declare class AuthenticationServiceRender extends HiveVaultRender {
    private contextProvider;
    constructor(serviceEndpoint: ServiceEndpoint);
    auth(token: string): Promise<AuthToken>;
}
