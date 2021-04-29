import { HiveResponseBody } from "./hiveresponsebody";

export class NodeVersionResponseBody extends HiveResponseBody {
    private version: string;

    public getVersion(): string {
        return this.version;
    }
}
