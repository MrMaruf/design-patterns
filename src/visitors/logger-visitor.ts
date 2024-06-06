import { DirectoryRepresentation } from "../models/directory-representation.js";
import { FileRepresentation } from "../models/file-representation.js";
import { IVisitor } from "../interfaces/IVisitor.js";
import { ImageFile } from "../models/image-file.js";
import terminalImage from "terminal-image";
import { SoundFile } from "../models/sound-file.js";

export class ConsoleLoggerVisitor implements IVisitor {
    async visitSoundFile(sound: SoundFile): Promise<void> {
        const fileName = sound.name + sound.extension;
        const separators = this.calculateDepthSeparator(sound);
        console.log(separators, "-🎼", fileName);
    }

    async visitImageFile(image: ImageFile) {
        const fileName = image.name + image.extension;
        const separators = this.calculateDepthSeparator(image);
        console.log(separators, "-📷", fileName, "(printed below)");

        const content = await terminalImage.file(image.absolutePath);
        console.log(content);
    }

    async visitFile(file: FileRepresentation) {
        const fileName = file.name + file.extension;
        const separators = this.calculateDepthSeparator(file);
        console.log(separators, "- ", fileName);
    }
    async visitDirectory(directory: DirectoryRepresentation) {
        const fileName = directory.name;
        const separators = this.calculateDepthSeparator(directory);
        console.log(separators, "|", fileName);
        await directory.contents.forEach(
            async (object) => await object.accept(this)
        );
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
