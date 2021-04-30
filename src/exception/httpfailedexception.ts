

import { RuntimeException } from "./runtimeexception";

export class HttpFailedException extends RuntimeException {
	constructor(private code: number, message: string) {
		super(message);
	}

    public getCode(): number {
        return this.code;
    }
}