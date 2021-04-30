import { HiveResponseBody } from "./hiveresponsebody";
export declare class PaymentPlanResponseBody extends HiveResponseBody {
    private amount;
    private currency;
    private maxStorage;
    private name;
    private serviceDays;
    getAmount(): number;
    getCurrency(): string;
    getMaxStorage(): number;
    getName(): string;
    getServiceDays(): number;
}
