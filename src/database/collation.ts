export class Collation {
	private locale: string;
	private caseLevel: boolean;
	private caseFirst: string;
	private strength: number;
	private numericOrdering: boolean;
	private alternate: string;
	private maxVariable: string;
	private normalization: boolean;
	private backwards: boolean;

	public getLocale(): string {
		return this.locale;
	}

	public setLocale(locale: string): Collation {
		this.locale = locale;
		return this;
	}

	public getCaseLevel(): boolean {
		return this.caseLevel;
	}

	public setCaseLevel(caseLevel: boolean): Collation {
		this.caseLevel = caseLevel;
		return this;
	}

	public getCaseFirst(): string {
		return this.caseFirst;
	}

	public setCaseFirst(caseFirst: string): Collation {
		this.caseFirst = caseFirst;
		return this;
	}

	public getStrength(): number {
		return this.strength;
	}

	public setStrength(strength: number): Collation {
		this.strength = strength;
		return this;
	}

	public getNumericOrdering(): boolean {
		return this.numericOrdering;
	}

	public setNumericOrdering(numericOrdering: boolean): Collation {
		this.numericOrdering = numericOrdering;
		return this;
	}

	public getAlternate(): string {
		return this.alternate;
	}

	public setAlternate(alternate: string): Collation {
		this.alternate = alternate;
		return this;
	}

	public getMaxVariable(): string {
		return this.maxVariable;
	}

	public setMaxVariable(maxVariable: string): Collation {
		this.maxVariable = maxVariable;
		return this;
	}

	public getNormalization(): boolean {
		return this.normalization;
	}

	public setNormalization(normalization: boolean): Collation {
		this.normalization = normalization;
		return this;
	}

	public getBackwards(): boolean {
		return this.backwards;
	}

	public setBackwards(backwards: boolean): Collation {
		this.backwards = backwards;
		return this;
	}
}
