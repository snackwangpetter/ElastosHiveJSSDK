import { ScriptContext } from "../model/scriptcontext";

export class CallScriptRequestBody {
    // TODO JAVA @SerializedName("name")
    private name: string;
    // TODO JAVA @SerializedName("context")
    private context: ScriptContext;
    // TODO JAVA @SerializedName("params")
    private params: any;

    public setName(name: string): CallScriptRequestBody {
        this.name = name;
        return this;
    }

    public setContext(context: ScriptContext): CallScriptRequestBody {
        this.context = context;
        return this;
    }

    public setParams(params: any): CallScriptRequestBody {
        this.params = params;
        return this;
    }
}
