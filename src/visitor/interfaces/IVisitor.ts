import { DirectoryRepresentation } from "../models/directory-representation.js";
import { FileRepresentation } from "../models/file-representation.js";
import { ImageFile } from "../models/image-file.js";
import { SoundFile } from "../models/sound-file.js";

export interface IVisitor {
    visitFile(file: FileRepresentation): Promise<void>;
    visitDirectory(directory: DirectoryRepresentation): Promise<void>;
    visitImageFile(image: ImageFile): Promise<void>;
    visitSoundFile(sound: SoundFile): Promise<void>;
}