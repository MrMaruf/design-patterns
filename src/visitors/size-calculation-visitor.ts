import { DirectoryRepresentation } from "../models/directory-representation";
import { FileRepresentation } from "../models/file-representation";
import { IVisitor } from "../interfaces/IVisitor";

export class SizeCalculationVisitor implements IVisitor {
    private _size: number = 0;

    public get size(): number {
        return this._size;
    }

    // private set size(value: number) {
    //     console.log(value)
    //     if (this._size === undefined) {
    //         this._size = 0;
    //     }
    //     this._size = value;
    // }

    public resetSize(): void {
        this._size = 0;
    }

    visitDirectory(directory: DirectoryRepresentation): void {
        const dirSize = directory.stats.size;
        this._size += dirSize;
        directory.contents.forEach(object=>object.accept(this));
    }

    visitFile(file: FileRepresentation): void {
        const fileSize = file.stats.size;
        this._size += fileSize
    }

    getSize(sizeMeasure: "KB" | 'MB'): string {
        switch (sizeMeasure) {
            case "KB": {
                const sizeInKB = this._size / 1024;
                const cleanSize = sizeInKB.toFixed(2);
                return `${cleanSize} ${sizeMeasure}`
            }
            case "MB": {
                const sizeInKB = this._size / 1024 / 1024;
                const cleanSize = sizeInKB.toFixed(2);
                return `${cleanSize} ${sizeMeasure}`
            }
        }
    }
}
