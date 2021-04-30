"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInfo = void 0;
class FileInfo {
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    setLastModify(lastModify) {
        this.lastModify = lastModify;
    }
    getLastModified() {
        long;
        timeStamp = BigDecimal.valueOf(lastModify).multiply(new BigDecimal(1000)).longValue();
        return DateUtil.getCurrentEpochTimeStamp(timeStamp);
    }
}
exports.FileInfo = FileInfo;
//# sourceMappingURL=fileinfo.js.map