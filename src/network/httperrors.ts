import { AuthenticationException, VaultLockedException, NoEnoughSpaceException, HttpFailedException } from "../exception/exception"

export class HttpErrors {

    private static DEFAULT_MESSAGE = 'Unknown error.';
    private static ERRORS = {
        '400':'bad request',
        '401':'auth failed',
        '402':'payment required',
        '403':'forbidden',
        '404':'not found',
        '405':'method not allowed',
        '406':'not acceptable',
        '423':'locked',
        '452':'checksum failed or not enough space',
        '500':'internal server error',
        '501':'not implemented',
        '503':'service unavailable',
        '507':'insufficient storage',
        '600':'error body status'
    };

    public static get(code: number) {
        if (HttpErrors.ERRORS.hasOwnProperty(code.toString())) {
            return HttpErrors.ERRORS[code.toString()];
        }
        return HttpErrors.DEFAULT_MESSAGE;
    }
    public static getHttpExceptionByCode(code: number, message: string) {
        switch (code) {
            case 401:
                return new AuthenticationException();
            case 423:
                return new VaultLockedException();
            case 452:
                return new NoEnoughSpaceException();
            default:
                return new HttpFailedException(code, message);
        }
    }
}