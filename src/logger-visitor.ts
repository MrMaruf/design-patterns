import { DirectoryRepresentation } from "./directory-representation";
import { FileRepresentation } from "./file-representation";
import { IVisitor } from "./interfaces/IVisitor";

export class LoggerVisitor implements IVisitor {
    visitFile(file: FileRepresentation) {
        const fileName = file.name + file.extension;
        const separators = this.calculateDepthSeparator(file);
        console.log(separators, "--", fileName);
    }
    visitDirectory(directory: DirectoryRepresentation) {
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
