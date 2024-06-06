import { DirectoryRepresentation } from "../models/directory-representation.js";
import { FileRepresentation } from "../models/file-representation.js";
import { IVisitor } from "../interfaces/IVisitor.js";
import { ImageFile } from "../models/image-file.js";
import terminalImage from "terminal-image";
import { SoundFile } from "../models/sound-file.js";

export class LoggerVisitor implements IVisitor {
    async visitSoundFile(sound: SoundFile): Promise<void> {
        
    }


    async visitImageFile(image: ImageFile) {
        console.log(await terminalImage.file('unicorn.jpg'));
    }

    async visitFile(file: FileRepresentation) {
        const fileName = file.name + file.extension;
        const separators = this.calculateDepthSeparator(file);
        console.log(separators, "--", fileName);
    }
    async visitDirectory(directory: DirectoryRepresentation) {
        const fileName = directory.name;
        const separators = this.calculateDepthSeparator(directory);
        console.log(separators, "|", fileName);
        directory.contents.forEach((object) => object.accept(this));
    }

    calculateDepthSeparator(
        object: FileRepresentation | DirectoryRepresentation
    ): string {
        const depthRegExp = new RegExp("\\\\", "g");
        const depth = object.absolutePath.match(depthRegExp)?.length ?? 0;
        const tabs = "  ".repeat(depth);
        return tabs;
    }
}
