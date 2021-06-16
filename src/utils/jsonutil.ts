import { JSONObject } from "../json";

export class JsonUtil {
	public static serialize(object: any): string {
		try {
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(object);
		} catch (JsonProcessingException e) {
			
			return null;
		}
	}

	public static deserialize(json: string): JSONObject {
		try {
			ObjectMapper mapper = new ObjectMapper();
			return mapper.readTree(json);
		} catch (Exception e) {
			
			return null;
		}
	}
}
