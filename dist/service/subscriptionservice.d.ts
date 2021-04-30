export interface SubscriptionService<T> {
    subscribe(pricingPlan: string): Promise<T>;
    unsubscribe(): Promise<void>;
    activate(): Promise<void>;
    deactivate(): Promise<void>;
    checkSubscription(): Promise<T>;
}
