import { Condition } from "../network/model/condition";
import { Executable } from "../network/model/executable";

export interface ScriptingService {
    /**
     * Lets the vault owner register a script on his vault for a given app. The script is built on the client side, then
     * serialized and stored on the hive back-end. Later on, anyone, including the vault owner or external users, can
     * use Scripting.call() to execute one of those scripts and get results/data.
     */
    // OVERLOAD REMOVED COMPARED TO JAVA registerScript(name: string, executable: Executable, allowAnonymousUser: boolean, allowAnonymousApp: boolean): Promise<boolean>;

    registerScript(name: string, condition: Condition | null, executable: Executable, allowAnonymousUser: boolean, allowAnonymousApp: boolean): Promise<boolean>;
}
