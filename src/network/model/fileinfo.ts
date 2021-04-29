/**
 * The class to represent the information of File or Folder.
 */
export class FileInfo {
	//@ TODO JAVA SerializedName("type")
	private type: string;
	//@ TODO JAVA @SerializedName("name")
	private name: string;
	//@ TODO JAVA @SerializedName("size")
	private size: number;
	//@ TODO JAVA @SerializedName("last_modify")
	private lastModify: number;

	public getType(): string {
		return this.type;
	}

	public setType(type: string) {
		this.type = type;
	}

	public getName(): string {
		return this.name;
	}

	public setName(name: string) {
		this.name = name;
	}

	public getSize(): number {
		return this.size;
	}

	public setSize(size: number) {
		this.size = size;
	}

	public setLastModify(lastModify: number) {
		this.lastModify = lastModify;
	}

	public getLastModified(): string {
		long timeStamp = BigDecimal.valueOf(lastModify).multiply(new BigDecimal(1000)).longValue();
		return DateUtil.getCurrentEpochTimeStamp(timeStamp);
	}
}
