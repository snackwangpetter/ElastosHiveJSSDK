import { HiveResponseBody } from "./hiveresponsebody";

export class VaultInfoResponseBody extends HiveResponseBody {
    private did: string;
    // TODO JAVA @SerializedName("max_storage")
    private maxStorage: number;
    // TODO JAVA @SerializedName("file_use_storage")
    private fileUseStorage: number;
    // TODO JAVA @SerializedName("db_use_storage")
    private dbUseStorage: number;
    // TODO JAVA @SerializedName("modify_time")
    private modifyTime: number;
    // TODO JAVA @SerializedName("start_time")
    private startTime: number;
    // TODO JAVA @SerializedName("end_time")
    private endTime: number;
    // TODO JAVA @SerializedName("pricing_using")
    private pricingUsing: string;
    private state: string;

    public getDid(): string {
        return this.did;
    }

    public getMaxStorage(): number {
        return this.maxStorage;
    }

    public getFileUseStorage(): number {
        return this.fileUseStorage;
    }

    public getDbUseStorage(): number {
        return this.dbUseStorage;
    }

    public getModifyTime(): number {
        return this.modifyTime;
    }

    public getModifyTimeStr(): string {
        return this.getDateStrByStamp(this.modifyTime);
    }

    public getStartTime(): number {
        return this.startTime;
    }

    public getStartTimeStr(): string {
        return this.getDateStrByStamp(this.startTime);
    }

    public getEndTime(): number {
        return this.endTime;
    }

    public getEndTimeStr(): string {
        return this.getDateStrByStamp(this.endTime);
    }

    public getPricingUsing(): string {
        return this.pricingUsing;
    }

    public getState(): string {
        return this.state;
    }

    public isExisting(): boolean {
        return "running" === this.state;
    }
}
