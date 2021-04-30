"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoUtil = void 0;
class CryptoUtil {
    static getSHA256(str) {
        MessageDigest;
        messageDigest;
        String;
        encodestr = "";
        try {
            messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(str.getBytes("UTF-8"));
            encodestr = byte2Hex(messageDigest.digest());
        }
        catch (NoSuchAlgorithmException) { }
        e;
        {
            e.printStackTrace();
        }
        try { }
        catch (UnsupportedEncodingException) { }
        e;
        {
            e.printStackTrace();
        }
        return encodestr;
    }
    static byte2Hex(bytes) {
        StringBuffer;
        stringBuffer = new StringBuffer();
        String;
        temp = null;
        for (int; i = 0; i < bytes.length)
            ;
        i++;
        {
            temp = Integer.toHexString(bytes[i] & 0xFF);
            if (temp.length() == 1) {
                stringBuffer.append("0");
            }
            stringBuffer.append(temp);
        }
        return stringBuffer.toString();
    }
}
exports.CryptoUtil = CryptoUtil;
//# sourceMappingURL=cryptoutil.js.map