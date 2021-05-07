import dayjs from "dayjs";
import { HiveException } from "../../exception/hiveexception";
import { HiveSdkException } from "../../exception/hivesdkexception";
import { HttpFailedException } from "../../exception/httpfailedexception";
import { JSONObject } from "../../json";
import { KeyValueDict } from "../model/keyvaluedict";

export class HiveResponseBody {
    private static SUCCESS = "OK";
    private static FORMAT_DT: "yyyy-MM-dd HH:mm:ss";

    private static errorMessages: Map<number, string> ;

    // TODO JAVA @SerializedName("_status")
    private status: string;

    // TODO JAVA @SerializedName("_error")
    private error: Error;

    /* public void setStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public int getErrorCode() {
        return error == null ? -1 : error.code;
    }

    public String getErrorMessage() {
        return error == null ? "" : error.message;
    }*/

    public failed(): boolean {
        return HiveResponseBody.SUCCESS !== this.status;
    }

    /**
     * We can't check status on interceptor because of body string can be only read once.
     * @param response response
     * @param <T> response body type
     * @return response body object
     * @throws IOException IOException
     */
    /* public static <T extends HiveResponseBody> T validateBody(Response<T> response) throws IOException {
        return validateBody(response.body());
    }*/

    public static validateBody<T extends HiveResponseBody>(body: T): T {
        if (body == null)
            throw new HiveSdkException("Failed to get response body(null)");

        if (body.failed())
            throw new HttpFailedException(600, this.getHttpErrorMessages().get(600));

        return body;
    }
/*
    public static String validateBodyStr(Response<ResponseBody> response) {
        ResponseBody body = response.body();
        if (body == null)
            throw new HiveSdkException("Failed to get body on validateBody");

        try {
            String bodyStr = body.string();
            if (new Gson().fromJson(bodyStr, HiveResponseBody.class).failed()) {
                throw new HiveSdkException("Get ERR response status on validateBody");
            }
            return bodyStr;
        } catch (IOException e) {
            throw new HiveSdkException(e.getMessage());
        }
    }

    public static <T> T getValue(String json, Class<T> clz) {
        Object obj = null;
        try {
            if(clz.isAssignableFrom(String.class)) {
                obj = json;
            } else if(clz.isAssignableFrom(byte[].class)) {
                obj = json.getBytes();
            } else if(clz.isAssignableFrom(JsonNode.class)) {
                obj = new ObjectMapper().readTree(json);
            } else if(clz.isAssignableFrom(Reader.class)) {
                obj = new StringReader(json);
            } else {
                obj = new ObjectMapper().readValue(json, clz);
            }
        } catch (Exception e) {
            throw new HiveSdkException("unsupported result type for call script.");
        }
        return (T) obj;
    }

    public static <T> T getRequestStream(HttpURLConnection connection, Class<T> resultType) throws IOException {
        OutputStream outputStream = connection.getOutputStream();
        if (resultType.isAssignableFrom(OutputStream.class)) {
            UploadOutputStream uploader = new UploadOutputStream(connection, outputStream);
            return resultType.cast(uploader);
        } else if (resultType.isAssignableFrom(OutputStreamWriter.class)) {
            OutputStreamWriter writer = new UploadOutputStreamWriter(connection, outputStream);
            return resultType.cast(writer);
        } else {
            throw new InvalidPropertiesFormatException("Not supported result type: " + resultType.getName());
        }
    }

    public static <T> T getResponseStream(Response<ResponseBody> response, Class<T> resultType) {
        ResponseBody body = response.body();
        if (body == null)
            throw new HiveSdkException("Failed to get response body");

        if (resultType.isAssignableFrom(Reader.class))
            return resultType.cast(new InputStreamReader(body.byteStream()));
        else if (resultType.isAssignableFrom(InputStream.class))
            return resultType.cast(body.byteStream());
        else
            throw new InvalidParameterException("Not supported result type");
    }

    public static Map<String, Object> jsonNode2Map(JsonNode node) {
        return new ObjectMapper().convertValue(node, new TypeReference<Map<String, Object>>() {});
    }

    public static JsonNode map2JsonNode(Map<String, Object> map) {
        return new ObjectMapper().convertValue(map, JsonNode.class);
    }*/

    public static jsonNode2KeyValueDic(node: JSONObject): KeyValueDict {
        // Java: return new ObjectMapper().convertValue(node, new TypeReference<KeyValueDict>() {});
    }

    public static jsonNodeList2KeyValueDicList(docs: JSONObject[]): KeyValueDict[] {
        // Java: return docs.stream().map(HiveResponseBody::jsonNode2KeyValueDic).collect(Collectors.toList());
    }

    public static KeyValueDict2JsonNode(dict: KeyValueDict): JSONObject {
        // Java: return new ObjectMapper().convertValue(dict, JsonNode.class);
    }

    public static KeyValueDictList2JsonNodeList(dicts: KeyValueDict[]): JSONObject[] {
        // Java: return dicts.stream().map(HiveResponseBody::KeyValueDict2JsonNode).collect(Collectors.toList());
    }

    /*public static Map<Integer, String> getHttpErrorMessages() {
        if (errorMessages == null) {
            Map<Integer, String> messages = new HashMap<>();
            messages.put(400, "bad request");
            messages.put(401, "auth failed");
            messages.put(402, "payment required");
            messages.put(403, "forbidden");
            messages.put(404, "not found");
            messages.put(405, "method not allowed");
            messages.put(406, "not acceptable");
            messages.put(423, "locked");
            messages.put(452, "checksum failed or not enough space");
            messages.put(500, "internal server error");
            messages.put(501, "not implemented");
            messages.put(503, "service unavailable");
            messages.put(507, "insufficient storage");
            messages.put(600, "error body status");
            errorMessages = messages;
        }
        return errorMessages;
    }*/

    public static convertException(e: Exception): Exception {
        if (e instanceof HttpFailedException) {
            let ex = e as HttpFailedException;
            return this.getHttpExceptionByCode(ex.getCode(), ex.getMessage());
        } else if (e instanceof IOException)
            return new HiveException(e.getMessage());
        else
            return e;
    }
/*
    public static IOException getHttpExceptionByCode(int code, String message) {
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
    }*/

    protected getDateStrByStamp(value: number): string {
        return dayjs(value).format(HiveResponseBody.FORMAT_DT);
    }

    /*static class Error {
        @SerializedName("code")
        int code;
        @SerializedName("message")
        String message;
    } */
}
