import { DateUtil } from "../../utils/dateutil";

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
		let timeStamp = this.lastModify * 1000;
		// TODO! getCurrentEpochTimeStamp() seems to use a timestamp in SEC, not in MS... need to compare with java
		return DateUtil.getCurrentEpochTimeStamp(timeStamp);
	}
}
