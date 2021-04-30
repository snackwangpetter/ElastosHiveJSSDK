import { JSONObject } from "../json";
export declare class JsonUtil {
    static serialize(object: any): string;
    static deserialize(json: string): JSONObject;
}
