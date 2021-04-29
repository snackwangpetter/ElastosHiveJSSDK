package org.elastos.hive.network.request;

import com.google.gson.annotations.SerializedName;

public class PubsubRequestBody {
    // TODO JAVA @SerializedName("channel_name")
    private final String channelName;

    public PubsubRequestBody(String channelName) {
        this.channelName = channelName;
    }
}
