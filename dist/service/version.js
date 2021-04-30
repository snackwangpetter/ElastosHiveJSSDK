"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
class Version {
    getMajor() {
        return this.major;
    }
    setMajor(major) {
        this.major = major;
        return this;
    }
    getMinor() {
        return this.minor;
    }
    setMinor(minor) {
        this.minor = minor;
        return this;
    }
    getPatch() {
        return this.patch;
    }
    setPatch(patch) {
        this.patch = patch;
        return this;
    }
}
exports.Version = Version;
//# sourceMappingURL=version.js.map