import { ScriptingService } from "../service/scriptingservice";
import { ServiceEndpoint } from "../serviceendpoint";
import { HiveVaultRender } from "./hivevaultrender";
import { HttpExceptionHandler } from "./httpexceptionhandler";

export class ScriptingServiceRender extends HiveVaultRender implements ScriptingService, HttpExceptionHandler {
	public constructor(serviceEndpoint: ServiceEndpoint) {
		super(serviceEndpoint);
	}

	/* @Override
	public CompletableFuture<Boolean> registerScript(String name, Executable executable,
													 boolean allowAnonymousUser, boolean allowAnonymousApp) {
		return registerScript(name, null, executable, allowAnonymousUser, allowAnonymousApp);
	}

	@Override
	public CompletableFuture<Boolean> registerScript(String name, Condition condition, Executable executable,
													 boolean allowAnonymousUser, boolean allowAnonymousApp) {
		return CompletableFuture.supplyAsync(()-> {
			try {
				HiveResponseBody.validateBody(
						getConnectionManager().getScriptingApi()
								.registerScript(new RegisterScriptRequestBody().setName(name)
										.setExecutable(executable)
										.setAllowAnonymousUser(allowAnonymousUser)
										.setAllowAnonymousApp(allowAnonymousApp)
										.setCondition(condition))
								.execute().body());
				return true;
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public <T> CompletableFuture<T> callScript(String name, JsonNode params, String targetDid, String targetAppDid, Class<T> resultType) {
		return CompletableFuture.supplyAsync(()-> {
			try {
				return HiveResponseBody.getValue(HiveResponseBody.validateBodyStr(
						getConnectionManager().getScriptingApi()
								.callScript(new CallScriptRequestBody()
										.setName(name)
										.setContext(new ScriptContext()
												.setTargetDid(targetDid)
												.setTargetAppDid(targetAppDid))
										.setParams(HiveResponseBody.jsonNode2Map(params)))
								.execute()
				), resultType);
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public <T> CompletableFuture<T> callScriptUrl(String name, String params, String targetDid, String targetAppDid, Class<T> resultType) {
		return CompletableFuture.supplyAsync(()-> {
			try {
				return HiveResponseBody.getValue(HiveResponseBody.validateBodyStr(
						getConnectionManager().getScriptingApi()
								.callScriptUrl(targetDid, targetAppDid, name, params)
								.execute()
				), resultType);
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public <T> CompletableFuture<T> uploadFile(String transactionId, Class<T> resultType) {
		return CompletableFuture.supplyAsync(()-> {
			try {
				if (transactionId == null)
					throw new InvalidParameterException("Invalid parameter transactionId.");

				return HiveResponseBody.getRequestStream(
						getConnectionManager().openConnection(ScriptingApi.API_SCRIPT_UPLOAD + "/" + transactionId),
						resultType);
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	}

	public <T> CompletableFuture<T> downloadFile(String transactionId, Class<T> resultType) {
		return CompletableFuture.supplyAsync(()-> {
			try {
				if (transactionId == null)
					throw new InvalidParameterException("Invalid parameter transactionId.");

				return HiveResponseBody.getResponseStream(
						getConnectionManager().getScriptingApi()
								.callDownload(transactionId)
								.execute(),
						resultType);
			} catch (Exception e) {
				throw new CompletionException(convertException(e));
			}
		});
	} */
}
