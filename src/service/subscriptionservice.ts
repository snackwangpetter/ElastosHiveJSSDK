/**
 * Subscription is for using the functions of the vault service.
 * Before using it, subscribe request MUST be called.
 *
 * @param <T> Vault information for specific vault server.
 */
export interface SubscriptionService<T> {
	/**
	 * Subscript for using vault relating service.
	 *
	 * @param pricingPlan Pricing plan name for using the vault service.
	 * @return Vault service information.
	 */
	subscribe(pricingPlan: string): Promise<T>;

	/**
	 * Unsubscript vault service. After this, user can't use it.
	 *
	 * @return Void
	 */
	unsubscribe(): Promise<void>;

	/**
	 * Activate vault service for using.
	 *
	 * @return Void.
	 */
	activate(): Promise<void>;

	/**
	 * Deactive vault service for restrict access it later.
	 *
	 * @return Void
	 */
	deactivate(): Promise<void>;

	/**
	 * Check the subscription information.
	 *
	 * @return Subscription information for vault relating service.
	 */
	checkSubscription(): Promise<T>;
}
