import { DirectoryRepresentation } from "../models/directory-representation.js";
import { FileRepresentation } from "../models/file-representation.js";
import { IVisitor } from "../interfaces/IVisitor.js";
import { ImageFile } from "../models/image-file.js";
import { SoundFile } from "../models/sound-file.js";

export class SizeCalculationVisitor implements IVisitor {
    
    async visitImageFile(image: ImageFile): Promise<void> {
        await this.visitFile(image);
    }

    async visitSoundFile(sound: SoundFile): Promise<void> {
        await this.visitFile(sound);
    }

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

    async visitDirectory(directory: DirectoryRepresentation) {
        const dirSize = directory.stats.size;
        this._size += dirSize;
        directory.contents.forEach((object) => object.accept(this));
    }

    async visitFile(file: FileRepresentation) {
        const fileSize = file.stats.size;
        this._size += fileSize;
    }

    getSize(sizeMeasure: "KB" | "MB"): string {
        switch (sizeMeasure) {
            case "KB": {
                const sizeInKB = this._size / 1024;
                const cleanSize = sizeInKB.toFixed(2);
                return `${cleanSize} ${sizeMeasure}`;
            }
            case "MB": {
                const sizeInKB = this._size / 1024 / 1024;
                const cleanSize = sizeInKB.toFixed(2);
                return `${cleanSize} ${sizeMeasure}`;
            }
        }
    }
}
