export declare class Collation {
    private locale;
    private caseLevel;
    private caseFirst;
    private strength;
    private numericOrdering;
    private alternate;
    private maxVariable;
    private normalization;
    private backwards;
    getLocale(): string;
    setLocale(locale: string): Collation;
    getCaseLevel(): boolean;
    setCaseLevel(caseLevel: boolean): Collation;
    getCaseFirst(): string;
    setCaseFirst(caseFirst: string): Collation;
    getStrength(): number;
    setStrength(strength: number): Collation;
    getNumericOrdering(): boolean;
    setNumericOrdering(numericOrdering: boolean): Collation;
    getAlternate(): string;
    setAlternate(alternate: string): Collation;
    getMaxVariable(): string;
    setMaxVariable(maxVariable: string): Collation;
    getNormalization(): boolean;
    setNormalization(normalization: boolean): Collation;
    getBackwards(): boolean;
    setBackwards(backwards: boolean): Collation;
}
