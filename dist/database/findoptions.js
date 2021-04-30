"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOptions = void 0;
class FindOptions {
    setProjection(projection) {
        this.projection = projection;
        return this;
    }
    setSkip(skip) {
        this.skip = skip;
        return this;
    }
    setSort(sort) {
        this.sort = sort;
        return this;
    }
    setAllowPartialResults(allowPartialResults) {
        this.allowPartialResults = allowPartialResults;
        return this;
    }
    setBatchSize(batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    setReturnKey(returnKey) {
        this.returnKey = returnKey;
        return this;
    }
    setShowRecordId(showRecordId) {
        this.showRecordId = showRecordId;
        return this;
    }
}
exports.FindOptions = FindOptions;
(function (FindOptions) {
    class FieldEntry extends Map {
        FieldEntry(field, value) {
            super.set(field, value);
        }
    }
    FindOptions.FieldEntry = FieldEntry;
})(FindOptions = exports.FindOptions || (exports.FindOptions = {}));
//# sourceMappingURL=findoptions.js.map