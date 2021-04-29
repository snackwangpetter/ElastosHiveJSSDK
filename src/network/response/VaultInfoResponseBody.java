package org.elastos.hive.network.response;

import com.google.gson.annotations.SerializedName;

public class VaultInfoResponseBody extends HiveResponseBody {
    private String did;
    // TODO JAVA @SerializedName("max_storage")
    private long maxStorage;
    // TODO JAVA @SerializedName("file_use_storage")
    private long fileUseStorage;
    // TODO JAVA @SerializedName("db_use_storage")
    private long dbUseStorage;
    // TODO JAVA @SerializedName("modify_time")
    private long modifyTime;
    // TODO JAVA @SerializedName("start_time")
    private long startTime;
    // TODO JAVA @SerializedName("end_time")
    private long endTime;
    // TODO JAVA @SerializedName("pricing_using")
    private String pricingUsing;
    private String state;

    public String getDid() {
        return did;
    }

    public long getMaxStorage() {
        return maxStorage;
    }

    public long getFileUseStorage() {
        return fileUseStorage;
    }

    public long getDbUseStorage() {
        return dbUseStorage;
    }

    public long getModifyTime() {
        return modifyTime;
    }

    public String getModifyTimeStr() {
        return getDateStrByStamp(this.modifyTime);
    }

    public long getStartTime() {
        return startTime;
    }

    public String getStartTimeStr() {
        return getDateStrByStamp(this.startTime);
    }

    public long getEndTime() {
        return endTime;
    }

    public String getEndTimeStr() {
        return getDateStrByStamp(this.endTime);
    }

    public String getPricingUsing() {
        return pricingUsing;
    }

    public String getState() {
        return state;
    }

    public boolean isExisting() {
        return "running".equals(this.state);
    }
}
