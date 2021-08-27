package org.elastos.hive.connection.auth;

import org.elastos.hive.AppContextProvider;
import org.elastos.hive.ServiceContext;
import org.elastos.hive.connection.NodeRPCException;

class RemoteFetcher implements CodeFetcher {
	private AppContextProvider contextProvider;
	private AuthController controller;

	public RemoteFetcher(ServiceContext ServiceContext) {
		this.contextProvider = ServiceContext.getAppContext().getAppContextProvider();
		this.controller = new AuthController(ServiceContext, contextProvider.getAppInstanceDocument());
	}

	@Override
	public String fetch() throws NodeRPCException {
		try {
			String challenge = controller.signIn(contextProvider.getAppInstanceDocument());

			String challengeResponse = contextProvider.getAuthorization(challenge).get();
			return controller.auth(challengeResponse);
		} catch (Exception e) {
			// TODO: log here.
			e.printStackTrace();
			throw new NodeRPCException(401,-1, "Failed to get token by auth requests.");
		}
	}

	@Override
	public void invalidate() {}
}
