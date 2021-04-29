export class Version {
    private major: number;
    private minor: number;
    private patch: number;

    public getMajor(): number {
        return this.major;
    }

    public setMajor(major: number): Version {
        this.major = major;
        return this;
    }

    public getMinor(): number {
        return this.minor;
    }

    public setMinor(minor: number): Version {
        this.minor = minor;
        return this;
    }

    public getPatch(): number {
        return this.patch;
    }

    public setPatch(patch: number): Version {
        this.patch = patch;
        return this;
    }
}
