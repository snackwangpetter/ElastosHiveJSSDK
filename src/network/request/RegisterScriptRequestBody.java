package org.elastos.hive.network.request;

import com.google.gson.annotations.SerializedName;
import org.elastos.hive.network.model.Condition;
import org.elastos.hive.network.model.Executable;

public class RegisterScriptRequestBody {
    // TODO JAVA @SerializedName("name")
    private String name;
    // TODO JAVA @SerializedName("executable")
    private Executable executable;
    // TODO JAVA @SerializedName("allowAnonymousUser")
    private Boolean allowAnonymousUser;
    // TODO JAVA @SerializedName("allowAnonymousApp")
    private Boolean allowAnonymousApp;
    // TODO JAVA @SerializedName("condition")
    private Condition condition;

    public RegisterScriptRequestBody setName(String name) {
        this.name = name;
        return this;
    }

    public RegisterScriptRequestBody setExecutable(Executable executable) {
        this.executable = executable;
        return this;
    }

    public RegisterScriptRequestBody setAllowAnonymousUser(Boolean allowAnonymousUser) {
        this.allowAnonymousUser = allowAnonymousUser;
        return this;
    }

    public RegisterScriptRequestBody setAllowAnonymousApp(Boolean allowAnonymousApp) {
        this.allowAnonymousApp = allowAnonymousApp;
        return this;
    }

    public RegisterScriptRequestBody setCondition(Condition condition) {
        this.condition = condition;
        return this;
    }
}
