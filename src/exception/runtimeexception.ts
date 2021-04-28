
export class RuntimeException extends Error {
	private causedBy?: Error;

    constructor(message?: string, causedBy?: Error) {
        super(message);
        this.causedBy = causedBy;
        Object.setPrototypeOf(this, new.target.prototype);
    }

    public from(e:any) {
        this.message += (" Caused by " + e.message);

        return this;
    }
}
