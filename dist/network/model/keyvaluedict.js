"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueDict = void 0;
class KeyValueDict extends Map {
    putKv(key, value) {
        super.set(key, value);
        return this;
    }
}
exports.KeyValueDict = KeyValueDict;
//# sourceMappingURL=keyvaluedict.js.map