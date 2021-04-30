"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingPlan = void 0;
class PricingPlan {
    setAmount(amount) {
        this.amount = amount;
        return this;
    }
    setCurrency(currency) {
        this.currency = currency;
        return this;
    }
    setMaxStorage(maxStorage) {
        this.maxStorage = maxStorage;
        return this;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setServiceDays(serviceDays) {
        this.serviceDays = serviceDays;
        return this;
    }
    getAmount() {
        return this.amount;
    }
    getCurrency() {
        return this.currency;
    }
    getMaxStorage() {
        return this.maxStorage;
    }
    getName() {
        return this.name;
    }
    getServiceDays() {
        return this.serviceDays;
    }
}
exports.PricingPlan = PricingPlan;
//# sourceMappingURL=pricingplan.js.map