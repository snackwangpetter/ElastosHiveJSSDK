import { HiveResponseBody } from "./hiveresponsebody";
export declare class VaultInfoResponseBody extends HiveResponseBody {
    private did;
    private maxStorage;
    private fileUseStorage;
    private dbUseStorage;
    private modifyTime;
    private startTime;
    private endTime;
    private pricingUsing;
    private state;
    getDid(): string;
    getMaxStorage(): number;
    getFileUseStorage(): number;
    getDbUseStorage(): number;
    getModifyTime(): number;
    getModifyTimeStr(): string;
    getStartTime(): number;
    getStartTimeStr(): string;
    getEndTime(): number;
    getEndTimeStr(): string;
    getPricingUsing(): string;
    getState(): string;
    isExisting(): boolean;
}
