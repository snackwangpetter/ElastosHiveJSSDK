import { IPretendRequestInterceptor, Pretend } from "pretend";
import { AuthApi } from "../network/authapi";
import { Class } from "../class";
import { ServiceEndpoint } from "../serviceendpoint";

/*
 * Copyright (c) 2021 Elastos Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
export class ConnectionManager {
	private static DEFAULT_TIMEOUT = 30;

	private serviceEndpoint: ServiceEndpoint;
	private authRequestInterceptor: IPretendRequestInterceptor;
	/* TODO JAVA private RequestInterceptor plainRequestInterceptor;
 */
	/* private subscriptionApi: SubscriptionApi;
	private paymentApi: PaymentApi;
	private databaseApi: DatabaseApi; */

	private authApi: AuthApi;
	/* private filesApi: FilesApi;
	private scriptingApi: ScriptingApi;*/
	private backupApi: BackupApi;
	/* private nodeManageApi: NodeManageApi;  */

	public constructor(serviceEndpoint: ServiceEndpoint) {
		this.serviceEndpoint = serviceEndpoint;
		/* TODO JAVA this.plainRequestInterceptor = new RequestInterceptor(this);
		this.authRequestInterceptor  = new RequestInterceptor(this, false); */
	}

	public getServiceEndpoint(): ServiceEndpoint {
		return this.serviceEndpoint;
	}

	public getAuthApi(): AuthApi {
		if (this.authApi == null)
			this.authApi = ConnectionManager.createService(AuthApi, this.serviceEndpoint.getProviderAddress(), this.authRequestInterceptor);

		return this.authApi;
	}

	/* public NodeManageApi getNodeManagerApi() {
		if (nodeManageApi == null)
			nodeManageApi = createService(NodeManageApi.class, serviceEndpoint.getProviderAddress(), this.authRequestInterceptor);

		return nodeManageApi;
	}

	public FilesApi getFilesApi() {
		if (filesApi == null)
			filesApi = createService(FilesApi.class, serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor);

		return filesApi;
	}

	public SubscriptionApi getSubscriptionApi() {
		if (subscriptionApi == null) {
			subscriptionApi = createService(SubscriptionApi.class, serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor);
		}
		return subscriptionApi;
	}

	public PaymentApi getPaymentApi() {
		if (paymentApi == null) {
			paymentApi = createService(PaymentApi.class, serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor);
		}
		return paymentApi;
	}

	public DatabaseApi getDatabaseApi() {
		if (databaseApi == null) {
			databaseApi = createService(DatabaseApi.class, serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor);
		}
		return databaseApi;
	}

	public ScriptingApi getScriptingApi() {
		if (scriptingApi == null) {
			scriptingApi = createService(ScriptingApi.class, serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor);
		}
		return scriptingApi;
	}

	public BackupApi getBackupApi() {
		if (backupApi == null) {
			backupApi = createService(BackupApi.class, serviceEndpoint.getProviderAddress(), this.plainRequestInterceptor);
		}
		return backupApi;
	} */

	/* public openConnection(String path): HttpURLConnection {
		String url = serviceEndpoint.getProviderAddress() + BaseApi.API_VERSION + path;
		LogUtil.d("open connection with URL: " + url);
		HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(url).openConnection();
		httpURLConnection.setRequestMethod("POST");
		httpURLConnection.setRequestProperty("User-Agent",
				"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11");
		httpURLConnection.setConnectTimeout(5000);
		httpURLConnection.setReadTimeout(5000);

		httpURLConnection.setDoOutput(true);
		httpURLConnection.setDoInput(true);
		httpURLConnection.setUseCaches(false);
		httpURLConnection.setRequestProperty("Transfer-Encoding", "chunked");
		httpURLConnection.setRequestProperty("Connection", "Keep-Alive");
		httpURLConnection.setRequestProperty("Authorization", this.plainRequestInterceptor.getAuthToken().getCanonicalizedAccessToken());

		httpURLConnection.setChunkedStreamingMode(0);
		return httpURLConnection;
	}

	public static readConnection(HttpURLConnection httpURLConnection) {
		int code = httpURLConnection.getResponseCode();
		if (code == 200) {
			BufferedReader reader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
			StringBuilder result = new StringBuilder();
			String line = "";
			while ((line = reader.readLine()) != null)
				if (line.length() > 0)
					result.append(line.trim());
			LogUtil.d("connection", "response content: " + result.toString());
		} else {
			throw HiveResponseBody.getHttpExceptionByCode(code, HiveResponseBody.getHttpErrorMessages().get(code));
		}
	} */

	private static createService<S>(serviceClass: Class<S>, baseUrl: string, requestInterceptor: IPretendRequestInterceptor): S {
		return Pretend.builder()
			// TODO JAVA .interceptor(new LoggerInterceptor())
			.requestInterceptor(requestInterceptor)
			// TODO JAVA .connectTimeout(DEFAULT_TIMEOUT, TimeUnit.SECONDS)
			// TODO JAVA .readTimeout(DEFAULT_TIMEOUT, TimeUnit.SECONDS);
			.decode(Pretend.JsonDecoder) // TODO: SAME AS .addConverterFactory(GsonConverterFactory.create());  ?
			.target<S>(serviceClass, baseUrl);

		/* TODO JAVA retrofitBuilder = new Retrofit.Builder()
				.baseUrl(baseUrl)
				.addConverterFactory(StringConverterFactory.create())
				*/
	}
}
