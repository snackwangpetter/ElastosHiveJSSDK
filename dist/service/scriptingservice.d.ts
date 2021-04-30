import { Condition } from "../network/model/condition";
import { Executable } from "../network/model/executable";
export interface ScriptingService {
    registerScript(name: string, condition: Condition | null, executable: Executable, allowAnonymousUser: boolean, allowAnonymousApp: boolean): Promise<boolean>;
}
