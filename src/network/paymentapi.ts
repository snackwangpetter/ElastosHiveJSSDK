import { Get, Post } from "pretend";
import { BaseApi } from "./baseapi";
import { PaymentCreateRequestBody } from "./request/paymentcreaterequestbody";
import { PayOrderRequestBody } from "./request/payorderrequestbody";
import { HiveResponseBody } from "./response/hiveresponsebody";
import { OrderInfoResponseBody } from "./response/orderinforesponsebody";
import { OrderListResponseBody } from "./response/orderlistresponsebody";
import { PaymentCreateResponseBody } from "./response/paymentcreateresponsebody";
import { PaymentPackageResponseBody } from "./response/paymentpackageresponsebody";
import { PaymentPlanResponseBody } from "./response/paymentplanresponsebody";
import { PaymentVersionResponseBody } from "./response/paymentversionresponsebody";

export class PaymentApi {
	@Get(BaseApi.API_VERSION + "/payment/vault_package_info")
	getPackageInfo(): Promise<PaymentPackageResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/payment/vault_pricing_plan")
	getPricingPlan(/* @Query("name")  */name: string): Promise<PaymentPlanResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/payment/vault_backup_plan")
	getBackupPlan(/* @Query("name")  */name: string): Promise<PaymentPlanResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/payment/create_vault_package_order")
	createOrder(/* @Body  */body: PaymentCreateRequestBody): Promise<PaymentCreateResponseBody> { return null; }

	@Post(BaseApi.API_VERSION + "/payment/pay_vault_package_order")
	payOrder(/* @Body  */body: PayOrderRequestBody): Promise<HiveResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/payment/vault_package_order")
	getOrderInfo(/* @Query("order_id")  */orderId: string): Promise<OrderInfoResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/payment/vault_package_order_list")
	getOrderList(): Promise<OrderListResponseBody> { return null; }

	@Get(BaseApi.API_VERSION + "/payment/version")
	getPaymentVersion(): Promise<PaymentVersionResponseBody> { return null; }
}
