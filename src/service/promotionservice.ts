export interface PromotionService {
	/**
	 * Promote the backup node to vault node by backup data.
	 *
	 * @return Void
	 */
	promote(): Promise<void>;
}
