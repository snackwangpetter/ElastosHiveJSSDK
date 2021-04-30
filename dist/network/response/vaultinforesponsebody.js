"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultInfoResponseBody = void 0;
const hiveresponsebody_1 = require("./hiveresponsebody");
class VaultInfoResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getDid() {
        return this.did;
    }
    getMaxStorage() {
        return this.maxStorage;
    }
    getFileUseStorage() {
        return this.fileUseStorage;
    }
    getDbUseStorage() {
        return this.dbUseStorage;
    }
    getModifyTime() {
        return this.modifyTime;
    }
    getModifyTimeStr() {
        return this.getDateStrByStamp(this.modifyTime);
    }
    getStartTime() {
        return this.startTime;
    }
    getStartTimeStr() {
        return this.getDateStrByStamp(this.startTime);
    }
    getEndTime() {
        return this.endTime;
    }
    getEndTimeStr() {
        return this.getDateStrByStamp(this.endTime);
    }
    getPricingUsing() {
        return this.pricingUsing;
    }
    getState() {
        return this.state;
    }
    isExisting() {
        return "running" === this.state;
    }
}
exports.VaultInfoResponseBody = VaultInfoResponseBody;
//# sourceMappingURL=vaultinforesponsebody.js.map