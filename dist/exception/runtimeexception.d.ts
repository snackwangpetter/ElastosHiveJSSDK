export declare class RuntimeException extends Error {
    private causedBy?;
    constructor(message?: string, causedBy?: Error);
    from(e: any): this;
}
