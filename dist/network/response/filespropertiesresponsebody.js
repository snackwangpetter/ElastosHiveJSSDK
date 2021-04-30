"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesPropertiesResponseBody = void 0;
const fileinfo_1 = require("../model/fileinfo");
const hiveresponsebody_1 = require("./hiveresponsebody");
class FilesPropertiesResponseBody extends hiveresponsebody_1.HiveResponseBody {
    getFileInfo() {
        let info = new fileinfo_1.FileInfo();
        info.setType(this.type);
        info.setName(this.name);
        info.setSize(this.size);
        info.setLastModify(this.lastModify);
        return info;
    }
}
exports.FilesPropertiesResponseBody = FilesPropertiesResponseBody;
//# sourceMappingURL=filespropertiesresponsebody.js.map