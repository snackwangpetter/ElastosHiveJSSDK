"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonUtil = void 0;
class JsonUtil {
    static serialize(object) {
        try {
            ObjectMapper;
            mapper = new ObjectMapper();
            return mapper.writeValueAsString(object);
        }
        catch (JsonProcessingException) { }
        e;
        {
            e.printStackTrace();
            return null;
        }
    }
    static deserialize(json) {
        try {
            ObjectMapper;
            mapper = new ObjectMapper();
            return mapper.readTree(json);
        }
        catch (Exception) { }
        e;
        {
            e.printStackTrace();
            return null;
        }
    }
}
exports.JsonUtil = JsonUtil;
//# sourceMappingURL=jsonutil.js.map