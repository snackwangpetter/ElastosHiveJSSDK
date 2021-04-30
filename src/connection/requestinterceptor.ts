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

import { IPretendRequest, IPretendRequestInterceptor } from "pretend";
import { LocalResolver } from "../auth/localresolver";
import { RemoteResolver } from "../auth/remoteresolver";
import { TokenResolver } from "../auth/tokenresolver";
import { ConnectionManager } from "./connectionmanager";

/**
 * Set token to HTTP request.
 */
export class RequestInterceptor {
    private needToken: boolean;
    private tokenResolver: TokenResolver;

    constructor(connectionManager: ConnectionManager, needToken: boolean = true) {
        this.tokenResolver = new LocalResolver(connectionManager.getServiceEndpoint().getAppContext().getUserDid(),
                connectionManager.getServiceEndpoint().getProviderAddress(),
                LocalResolver.TYPE_AUTH_TOKEN,
                connectionManager.getServiceEndpoint().getAppContext().getAppContextProvider().getLocalDataDir());
        this.tokenResolver.setNextResolver(new RemoteResolver(connectionManager.getServiceEndpoint()));
        this.needToken = needToken;
    }

    public interceptor(request: IPretendRequest): IPretendRequest {

    }

    /*
    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        if (needToken) {
            request = request.newBuilder()
                    .addHeader(BaseApi.HTTP_AUTHORIZATION, getAuthToken().getCanonicalizedAccessToken())
                    .build();
        }
        return handleResponse(chain.proceed(request));
    } */

    /**
     * Handle response for common error checking.
     */
    /* private Response handleResponse(Response response) throws IOException {
        if (!response.isSuccessful())
            handleResponseErrorCode(response.code());
        return response;
    } */

    /**
     * All error code comes from node service.
     */
    /* private void handleResponseErrorCode(int code) throws IOException {
        if (needToken && code == 401)
            tokenResolver.invalidateToken();

        throw new HttpFailedException(code,
                HiveResponseBody.getHttpErrorMessages().getOrDefault(code, "Unknown error."));
    }

    public AuthToken getAuthToken() throws HttpFailedException {
        return tokenResolver.getToken();
    } */
}