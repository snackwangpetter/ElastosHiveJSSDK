"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const serviceendpoint_1 = require("./serviceendpoint");
class Provider extends serviceendpoint_1.ServiceEndpoint {
    constructor(context, providerAddress = null) {
        super(context, null);
    }
    getVersion() {
        return null;
    }
    getLatestCommitId() {
        return null;
    }
}
exports.Provider = Provider;
(function (Provider) {
    class Version {
        getMajorNumber() {
            return this.major;
        }
        getMinorNumber() {
            return this.minor;
        }
        getFixNumber() {
            return this.hotfix;
        }
        getFullNumber() {
            return 0;
        }
        getVersionName() {
            return null;
        }
        toString() {
            return this.getVersionName();
        }
    }
    Provider.Version = Version;
})(Provider = exports.Provider || (exports.Provider = {}));
//# sourceMappingURL=provider.js.map