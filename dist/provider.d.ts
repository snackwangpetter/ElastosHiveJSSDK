import { AppContext } from "./appcontext";
import { Version } from "./service/version";
import { ServiceEndpoint } from "./serviceendpoint";
export declare class Provider extends ServiceEndpoint {
    constructor(context: AppContext, providerAddress?: string);
    getVersion(): Promise<Version>;
    getLatestCommitId(): Promise<string>;
}
export declare namespace Provider {
    class Version {
        private major;
        private minor;
        private hotfix;
        getMajorNumber(): number;
        getMinorNumber(): number;
        getFixNumber(): number;
        getFullNumber(): number;
        getVersionName(): string;
        toString(): string;
    }
}
