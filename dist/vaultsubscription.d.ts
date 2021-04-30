import { AppContext } from "./appcontext";
import { Order } from "./payment/order";
import { PricingPlan } from "./payment/pricingplan";
import { Receipt } from "./payment/receipt";
import { PaymentService } from "./service/paymentservice";
import { SubscriptionService } from "./service/subscriptionservice";
import { ServiceEndpoint } from "./serviceendpoint";
import { HttpExceptionHandler } from "./vault/httpexceptionhandler";
export declare class VaultSubscription extends ServiceEndpoint implements SubscriptionService<VaultSubscription.VaultInfo>, PaymentService, HttpExceptionHandler {
    private subscriptionService;
    private paymentService;
    constructor(context: AppContext, providerAddress: string);
    subscribe(pricingPlan: string): Promise<VaultSubscription.VaultInfo>;
    unsubscribe(): Promise<void>;
    activate(): Promise<void>;
    deactivate(): Promise<void>;
    checkSubscription(): Promise<VaultSubscription.VaultInfo>;
    getPricingPlanList(): Promise<PricingPlan[]>;
    getPricingPlan(planName: string): Promise<PricingPlan>;
    placeOrder(planName: string): Promise<Order>;
    getOrder(orderId: string): Promise<Order>;
    payOrder(orderId: string, transIds: string[]): Promise<Receipt>;
    getReceipt(receiptId: string): Promise<Receipt>;
}
export declare namespace VaultSubscription {
    class VaultInfo {
        private userDid;
        private appInstanceDid;
        private appId;
        private provider;
        private serviceDid;
        private pricingUsing;
        private createTime;
        private modifyTime;
        private maxSpace;
        private dbSpaceUsed;
        private fileSpaceUsed;
        private existing;
        constructor(appInstanceDid: string, userDid: string, serviceDid: string);
        getUserDid(): string;
        setUserDid(userDid: string): VaultInfo;
        getAppInstanceDid(): string;
        setAppInstanceDid(appInstanceDid: string): VaultInfo;
        getAppId(): string;
        setAppId(appId: string): VaultInfo;
        getProvider(): string;
        setProvider(provider: string): VaultInfo;
        getServiceDid(): string;
        setServiceDid(serviceDid: string): VaultInfo;
        getPricingUsing(): string;
        setPricingUsing(pricingUsing: string): VaultInfo;
        getCreateTime(): string;
        setCreateTime(createTime: string): VaultInfo;
        getModifyTime(): string;
        setModifyTime(modifyTime: string): VaultInfo;
        getMaxSpace(): number;
        setMaxSpace(maxSpace: number): VaultInfo;
        getDbSpaceUsed(): number;
        setDbSpaceUsed(dbSpaceUsed: number): VaultInfo;
        getFileSpaceUsed(): number;
        setFileSpaceUsed(fileSpaceUsed: number): VaultInfo;
        isExisting(): boolean;
        setExisting(existing: boolean): VaultInfo;
    }
}
