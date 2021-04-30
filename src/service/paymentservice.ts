import { Order } from "../payment/order";
import { PricingPlan } from "../payment/pricingplan";
import { Receipt } from "../payment/receipt";

export interface PaymentService {
	/**
	 * Get pricing plan list from vault and backup service,
	 * such as more storage usage, backup service support, etc.
	 *
	 * @return the list of pricing plans
	 */
	getPricingPlanList(): Promise<PricingPlan[]>;

	/**
	 * Get a pricing plan by name. Every pricing plan has a name with which we can do
	 * the corresponding payment operation.
	 *
	 * @param planName the name of the pricing plan
	 * @return pricing plan
	 */
	getPricingPlan(planName: string): Promise<PricingPlan[]>;

	/**
	 * Make an order for the pricing plan named with planName.
	 *
	 * @param planName the name of the pricing plan
	 * @return the corresponding order details.
	 */
	placeOrder(planName: string): Promise<Order>;

	/**
	 * Get order information by order id.
	 *
	 * @param orderId order id
	 * @return the corresponding order details.
	 */
	getOrder(orderId: string): Promise<Order>;

	/**
	 * Pay for the order made before.
	 *
	 * @param orderId order id
	 * @param transIds payment transaction ids.
	 * @return receipt details.
	 */
	payOrder(orderId: string, transIds: string[]): Promise<Receipt>;

	/**
	 * Get receipt details by receipt id.
	 *
	 * @param receiptId receipt id.
	 * @return receipt details.
	 */
	getReceipt(receiptId: string): Promise<Receipt>;
}
