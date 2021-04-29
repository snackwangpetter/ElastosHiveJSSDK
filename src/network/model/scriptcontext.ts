export class ScriptContext {
    // TODO JAVA @SerializedName("target_did")
    private targetDid: string;
    // TODO JAVA @SerializedName("target_app_did")
    private targetAppDid: string;

    public setTargetDid(targetDid: string): ScriptContext {
        this.targetDid = targetDid;
        return this;
    }

    public setTargetAppDid(targetAppDid: string): ScriptContext {
        this.targetAppDid = targetAppDid;
        return this;
    }
}
