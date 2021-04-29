/**
 * Used for scripting service request body to keep unspecified key-values item.
 */
export class KeyValueDict extends Map<string, any> {
    public putKv(key: string, value: any): KeyValueDict {
        super.set(key, value);
        return this;
    }
}
