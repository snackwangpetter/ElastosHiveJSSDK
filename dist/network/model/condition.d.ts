export declare class Condition {
    static TYPE_AND: string;
    static TYPE_OR: string;
    static TYPE_QUERY_HAS_RESULTS: string;
    private name;
    private type;
    private body;
    constructor(name: string, type: string, body: string);
}
