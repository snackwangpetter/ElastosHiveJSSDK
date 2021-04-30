import { ScriptContext } from "../model/scriptcontext";
export declare class CallScriptRequestBody {
    private name;
    private context;
    private params;
    setName(name: string): CallScriptRequestBody;
    setContext(context: ScriptContext): CallScriptRequestBody;
    setParams(params: any): CallScriptRequestBody;
}
