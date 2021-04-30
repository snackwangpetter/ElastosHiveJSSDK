import { IPretendRequest } from "pretend";
import { ConnectionManager } from "./connectionmanager";
export declare class RequestInterceptor {
    private needToken;
    private tokenResolver;
    constructor(connectionManager: ConnectionManager, needToken?: boolean);
    interceptor(request: IPretendRequest): IPretendRequest;
}
