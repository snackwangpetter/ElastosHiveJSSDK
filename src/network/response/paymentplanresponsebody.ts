import { HiveResponseBody } from "./hiveresponsebody";

export class PaymentPlanResponseBody extends HiveResponseBody {
    private amount: number;
    private currency: string;
    private maxStorage: number;
    private name;
    private serviceDays: number;

    public getAmount(): number {
        return this.amount;
    }

    public getCurrency(): string {
        return this.currency;
    }

    public getMaxStorage(): number {
        return this.maxStorage;
    }

    public getName(): string {
        return this.name;
    }

    public getServiceDays(): number {
        return this.serviceDays;
    }
}
