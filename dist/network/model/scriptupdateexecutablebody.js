"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptUpdateExecutableBody = void 0;
const scriptdeleteexecutablebody_1 = require("./scriptdeleteexecutablebody");
class ScriptUpdateExecutableBody extends scriptdeleteexecutablebody_1.ScriptDeleteExecutableBody {
    setCollection(collection) {
        super.setCollection(collection);
        return this;
    }
    setFilter(filter) {
        super.setFilter(filter);
        return this;
    }
    setUpdate(update) {
        this.update = update;
        return this;
    }
    setOptions(options) {
        this.options = options;
        return this;
    }
}
exports.ScriptUpdateExecutableBody = ScriptUpdateExecutableBody;
//# sourceMappingURL=scriptupdateexecutablebody.js.map