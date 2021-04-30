import { AppContext } from "./appcontext";
import { Order } from "./payment/order";
import { PricingPlan } from "./payment/pricingplan";
import { Receipt } from "./payment/receipt";
import { PaymentService } from "./service/paymentservice";
import { SubscriptionService } from "./service/subscriptionservice";
import { ServiceEndpoint } from "./serviceendpoint";
export declare class BackupSubscription extends ServiceEndpoint implements SubscriptionService<BackupSubscription.BackupInfo>, PaymentService {
    private subscriptionService;
    private paymentService;
    constructor(context: AppContext, providerAddress: string);
    subscribe(pricingPlan: string): Promise<BackupSubscription.BackupInfo>;
    private getBackupInfoByResponseBody;
    unsubscribe(): Promise<void>;
    activate(): Promise<void>;
    deactivate(): Promise<void>;
    checkSubscription(): Promise<BackupSubscription.BackupInfo>;
    getPricingPlanList(): Promise<PricingPlan[]>;
    getPricingPlan(planName: string): Promise<PricingPlan>;
    placeOrder(planName: string): Promise<Order>;
    getOrder(orderId: string): Promise<Order>;
    payOrder(orderId: string, transIds: string[]): Promise<Receipt>;
    getReceipt(receiptId: string): Promise<Receipt>;
}
export declare namespace BackupSubscription {
    class BackupInfo {
        private did;
        private maxStorage;
        private fileUseStorage;
        private dbUseStorage;
        private modifyTime;
        private startTime;
        private endTime;
        private pricingUsing;
        private isExisting;
        getDid(): string;
        setDid(did: string): BackupInfo;
        getMaxStorage(): number;
        setMaxStorage(maxStorage: number): BackupInfo;
        getFileUseStorage(): number;
        setFileUseStorage(fileUseStorage: number): BackupInfo;
        getDbUseStorage(): number;
        setDbUseStorage(dbUseStorage: number): BackupInfo;
        getModifyTime(): string;
        setModifyTime(modifyTime: string): BackupInfo;
        getStartTime(): string;
        setStartTime(startTime: string): BackupInfo;
        getEndTime(): string;
        setEndTime(endTime: string): BackupInfo;
        getPricingUsing(): string;
        setPricingUsing(pricingUsing: string): BackupInfo;
        getIsExisting(): boolean;
        setIsExisting(isExisting: boolean): BackupInfo;
    }
}
