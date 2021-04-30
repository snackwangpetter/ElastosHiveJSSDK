import { PricingPlan } from "./pricingplan";
export declare class Order {
    private orderId;
    private did;
    private appId;
    private pricingInfo;
    private payTxids;
    private state;
    private type;
    private createTime;
    private finishTime;
    getOrderId(): string;
    getDid(): string;
    getAppId(): string;
    getPricingInfo(): PricingPlan;
    getPayTxids(): string[];
    getState(): string;
    getType(): string;
    getCreateTime(): number;
    getFinishTime(): number;
}
