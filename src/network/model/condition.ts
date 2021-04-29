export class Condition {
	public static TYPE_AND = "and";
	public static TYPE_OR = "or";
	public static TYPE_QUERY_HAS_RESULTS = "queryHasResults";

	// TODO JAVA @SerializedName("name")
	private name: string;
	// TODO JAVA @SerializedName("type")
	private type: string;
	// TODO JAVA @SerializedName("body")
	private body: any;

	public constructor(name: string, type: string, body: string) {
		this.name = name;
		this.type = type;
		this.body = body;
	}
}
