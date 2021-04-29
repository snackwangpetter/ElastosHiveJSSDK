export class VaultSubscription extends ServiceEndpoint implements SubscriptionService<VaultSubscription.VaultInfo>, PaymentService, HttpExceptionHandler {
	private context: AppContext;
	private subscriptionService: SubscriptionServiceRender;
	private paymentService: PaymentServiceRender;

	public constructor(context: AppContext, providerAddress: string) {
		super(context, providerAddress);
		this.context = context;
		this.paymentService = new PaymentServiceRender(this);
		this.subscriptionService = new SubscriptionServiceRender(this);
	}

	public subscribe(pricingPlan: string): Promise<VaultInfo> {
		return CompletableFuture.supplyAsync(() -> {
			try {
				this.subscriptionService.subscribe();
				//TODO:
				return new VaultInfo(null, getAppContext().getUserDid(), null);
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public unsubscribe(): Promise<void> {
		return CompletableFuture.runAsync(() -> {
			try {
				this.subscriptionService.unsubscribe();
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public activate(): Promise<void> {
		return CompletableFuture.runAsync(() -> {
			try {
				this.subscriptionService.activate();
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public deactivate(): Promise<void> {
		return CompletableFuture.runAsync(() -> {
			try {
				this.subscriptionService.deactivate();
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public checkSubscription(): Promise<VaultInfo> {
		return CompletableFuture.supplyAsync(() -> {
			try {
				VaultInfoResponseBody body = this.subscriptionService.getVaultInfo();
				return new VaultInfo(this.getUserDid(), null, body.getDid())
						.setProvider(this.getProviderAddress())
						.setCreateTime(body.getStartTimeStr())
						.setModifyTime(body.getModifyTimeStr())
						.setMaxSpace(body.getMaxStorage())
						.setDbSpaceUsed(body.getDbUseStorage())
						.setFileSpaceUsed(body.getFileUseStorage())
						.setExisting(body.isExisting());
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public getPricingPlanList(): Promise<PricingPlan[]> {
		return CompletableFuture.supplyAsync(()-> {
			try {
				return paymentService.getPricingPlanList();
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public getPricingPlan(planName: string): Promise<PricingPlan> {
		return CompletableFuture.supplyAsync(()-> {
			try {
				return paymentService.getPricingPlan(planName);
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public placeOrder(planName: string): Promise<Order> {
		return CompletableFuture.supplyAsync(()-> {
			try {
				return paymentService.getOrderInfo(paymentService.createPricingOrder(planName));
			} catch (e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public getOrder(orderId: string): Promise<Order> {
		return CompletableFuture.supplyAsync(()-> {
			try {
				return paymentService.getOrderInfo(orderId);
			} catch (e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public payOrder(orderId: string, transIds: string[]): Promise<Receipt> {
		return CompletableFuture.supplyAsync(()-> {
			try {
				paymentService.payOrder(orderId, transIds);
				//TODO:
				return new Receipt();
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public getReceipt(receiptId: string): Promise<Receipt> {
		throw new UnsupportedOperationException();
	}
}

export namespace VaultSubscription {
	export class VaultInfo {
		private String userDid;
		private String appInstanceDid;
		private String appId;
		private String provider;

		private String serviceDid;
		private String pricingUsing;
		private String createTime;
		private String modifyTime;
		private long maxSpace;
		private long dbSpaceUsed;
		private long fileSpaceUsed;
		private boolean existing;

		public VaultInfo(String appInstanceDid, String userDid, String serviceDid) {
			this.appInstanceDid = appInstanceDid;
			this.userDid = userDid;
			this.serviceDid = serviceDid;
		}

		public String getUserDid() {
			return userDid;
		}

		public VaultInfo setUserDid(String userDid) {
			this.userDid = userDid;
			return this;
		}

		public String getAppInstanceDid() {
			return appInstanceDid;
		}

		public VaultInfo setAppInstanceDid(String appInstanceDid) {
			this.appInstanceDid = appInstanceDid;
			return this;
		}

		public String getAppId() {
			return appId;
		}

		public VaultInfo setAppId(String appId) {
			this.appId = appId;
			return this;
		}

		public String getProvider() {
			return provider;
		}

		public VaultInfo setProvider(String provider) {
			this.provider = provider;
			return this;
		}

		public String getServiceDid() {
			return serviceDid;
		}

		public VaultInfo setServiceDid(String serviceDid) {
			this.serviceDid = serviceDid;
			return this;
		}

		public String getPricingUsing() {
			return pricingUsing;
		}

		public VaultInfo setPricingUsing(String pricingUsing) {
			this.pricingUsing = pricingUsing;
			return this;
		}

		public String getCreateTime() {
			return createTime;
		}

		public VaultInfo setCreateTime(String createTime) {
			this.createTime = createTime;
			return this;
		}

		public String getModifyTime() {
			return modifyTime;
		}

		public VaultInfo setModifyTime(String modifyTime) {
			this.modifyTime = modifyTime;
			return this;
		}

		public long getMaxSpace() {
			return maxSpace;
		}

		public VaultInfo setMaxSpace(long maxSpace) {
			this.maxSpace = maxSpace;
			return this;
		}

		public long getDbSpaceUsed() {
			return dbSpaceUsed;
		}

		public VaultInfo setDbSpaceUsed(long dbSpaceUsed) {
			this.dbSpaceUsed = dbSpaceUsed;
			return this;
		}

		public long getFileSpaceUsed() {
			return fileSpaceUsed;
		}

		public VaultInfo setFileSpaceUsed(long fileSpaceUsed) {
			this.fileSpaceUsed = fileSpaceUsed;
			return this;
		}

		public boolean isExisting() {
			return existing;
		}

		public VaultInfo setExisting(boolean existing) {
			this.existing = existing;
			return this;
		}
	}
}