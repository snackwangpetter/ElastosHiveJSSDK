export declare class FileInfo {
    private type;
    private name;
    private size;
    private lastModify;
    getType(): string;
    setType(type: string): void;
    getName(): string;
    setName(name: string): void;
    getSize(): number;
    setSize(size: number): void;
    setLastModify(lastModify: number): void;
    getLastModified(): string;
}
