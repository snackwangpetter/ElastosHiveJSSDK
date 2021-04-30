import { HiveResponseBody } from "./hiveresponsebody";

export class VaultCreateResponseBody extends HiveResponseBody {
    private existing: boolean;

    public getExisting(): boolean {
        return this.existing;
    }
}
