import { AppContext } from "./appcontext";
import { Version } from "./service/version";
import { ServiceEndpoint } from "./serviceendpoint";

/**
 * This class is used to fetch some possible information from remote hive node.
 * eg. version;
 *     latest commit Id;
 *     How many DID involved;
 *     How many vault service running there;
 *     How many backup service running there;
 *     How much disk storage filled there;
 *     etc.
 */
export class Provider extends ServiceEndpoint {
	public constructor(context: AppContext, providerAddress: string = null) {
		super(context, null);
	}

	public getVersion(): Promise<Version> {
		// TODO:
		return null;
	}

	public getLatestCommitId(): Promise<string> {
		// TODO:
		return null;
	}

}

export namespace Provider {
	export class Version {
		private major: number;
		private minor: number;
		private hotfix: number;

		public getMajorNumber(): number {
			return this.major;
		}

		public getMinorNumber(): number {
			return this.minor;
		}

		public getFixNumber(): number {
			return this.hotfix;
		}

		public getFullNumber(): number {
			return 0;
		}

		public getVersionName(): string {
			return null;
		}

		public toString(): string {
			return this.getVersionName();
		}
	}
}