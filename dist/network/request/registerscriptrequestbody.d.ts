import { Condition } from "../model/condition";
import { Executable } from "../model/executable";
export declare class RegisterScriptRequestBody {
    private name;
    private executable;
    private allowAnonymousUser;
    private allowAnonymousApp;
    private condition;
    setName(name: string): RegisterScriptRequestBody;
    setExecutable(executable: Executable): RegisterScriptRequestBody;
    setAllowAnonymousUser(allowAnonymousUser: boolean): RegisterScriptRequestBody;
    setAllowAnonymousApp(allowAnonymousApp: boolean): RegisterScriptRequestBody;
    setCondition(condition: Condition): RegisterScriptRequestBody;
}
