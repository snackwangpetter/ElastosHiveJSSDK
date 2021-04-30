export declare class AuthToken {
    static TYPE_TOKEN: string;
    static TYPE_BACKUP: string;
    private accessToken;
    private expiresTime;
    private tokenType;
    constructor(accessToken: string, expiresTime: number, tokenType: string);
    getAccessToken(): string;
    getExpiresTime(): number;
    getTokenType(): string;
    getCanonicalizedAccessToken(): string;
    isExpired(): boolean;
    private isBackupExpired;
}
