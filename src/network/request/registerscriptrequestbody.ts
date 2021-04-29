import { Condition } from "../model/condition";
import { Executable } from "../model/executable";

export class RegisterScriptRequestBody {
    // TODO JAVA @SerializedName("name")
    private name: string;
    // TODO JAVA @SerializedName("executable")
    private executable: Executable;
    // TODO JAVA @SerializedName("allowAnonymousUser")
    private allowAnonymousUser: boolean;
    // TODO JAVA @SerializedName("allowAnonymousApp")
    private allowAnonymousApp: boolean;
    // TODO JAVA @SerializedName("condition")
    private condition: Condition;

    public setName(name: string): RegisterScriptRequestBody {
        this.name = name;
        return this;
    }

    public setExecutable(executable: Executable): RegisterScriptRequestBody {
        this.executable = executable;
        return this;
    }

    public setAllowAnonymousUser(allowAnonymousUser: boolean): RegisterScriptRequestBody {
        this.allowAnonymousUser = allowAnonymousUser;
        return this;
    }

    public setAllowAnonymousApp(allowAnonymousApp: boolean): RegisterScriptRequestBody {
        this.allowAnonymousApp = allowAnonymousApp;
        return this;
    }

    public setCondition(condition: Condition): RegisterScriptRequestBody {
        this.condition = condition;
        return this;
    }
}
