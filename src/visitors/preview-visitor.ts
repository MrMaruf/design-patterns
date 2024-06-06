import { IVisitor } from "../interfaces/IVisitor.js";
import { DirectoryRepresentation } from "../models/directory-representation.js";
import { FileRepresentation } from "../models/file-representation.js";
import { ImageFile } from "../models/image-file.js";
import { SoundFile } from "../models/sound-file.js";

export class PreviewVisitor implements IVisitor {
    async visitFile(file: FileRepresentation): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async visitDirectory(directory: DirectoryRepresentation): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async visitImageFile(image: ImageFile): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async visitSoundFile(sound: SoundFile): Promise<void> {
        throw new Error("Method not implemented.");
    }

}