import { HiveResponseBody } from "./hiveresponsebody";

export class CountDocResponseBody extends HiveResponseBody {
    private count: number;

    public getCount(): number {
        return this.count;
    }
}
