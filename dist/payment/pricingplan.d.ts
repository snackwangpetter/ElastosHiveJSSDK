export declare class PricingPlan {
    private amount;
    private currency;
    private maxStorage;
    private name;
    private serviceDays;
    setAmount(amount: number): PricingPlan;
    setCurrency(currency: string): PricingPlan;
    setMaxStorage(maxStorage: number): PricingPlan;
    setName(name: string): PricingPlan;
    setServiceDays(serviceDays: number): PricingPlan;
    getAmount(): number;
    getCurrency(): string;
    getMaxStorage(): number;
    getName(): string;
    getServiceDays(): number;
}
