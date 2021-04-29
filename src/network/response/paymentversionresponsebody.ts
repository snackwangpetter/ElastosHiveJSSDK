import { HiveResponseBody } from "./hiveresponsebody";

export class PaymentVersionResponseBody extends HiveResponseBody {
    private version: string;

    public getVersion(): string {
        return this.version;
    }
}
