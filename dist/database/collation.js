"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collation = void 0;
class Collation {
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
        return this;
    }
    getCaseLevel() {
        return this.caseLevel;
    }
    setCaseLevel(caseLevel) {
        this.caseLevel = caseLevel;
        return this;
    }
    getCaseFirst() {
        return this.caseFirst;
    }
    setCaseFirst(caseFirst) {
        this.caseFirst = caseFirst;
        return this;
    }
    getStrength() {
        return this.strength;
    }
    setStrength(strength) {
        this.strength = strength;
        return this;
    }
    getNumericOrdering() {
        return this.numericOrdering;
    }
    setNumericOrdering(numericOrdering) {
        this.numericOrdering = numericOrdering;
        return this;
    }
    getAlternate() {
        return this.alternate;
    }
    setAlternate(alternate) {
        this.alternate = alternate;
        return this;
    }
    getMaxVariable() {
        return this.maxVariable;
    }
    setMaxVariable(maxVariable) {
        this.maxVariable = maxVariable;
        return this;
    }
    getNormalization() {
        return this.normalization;
    }
    setNormalization(normalization) {
        this.normalization = normalization;
        return this;
    }
    getBackwards() {
        return this.backwards;
    }
    setBackwards(backwards) {
        this.backwards = backwards;
        return this;
    }
}
exports.Collation = Collation;
//# sourceMappingURL=collation.js.map