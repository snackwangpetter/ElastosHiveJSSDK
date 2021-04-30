export declare class Receipt {
    private receiptId;
    private orderId;
    private customerDid;
    private transId;
    private transTime;
    private transAmount;
    private currency;
    private createdTime;
    getReceiptId(): string;
    getOrderId(): string;
    getCustomerDid(): string;
    getTransId(): string;
    getTransTime(): number;
    getTransAmount(): number;
    getCurrency(): number;
    getCreatedTime(): number;
}
