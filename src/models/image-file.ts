import { IVisitor } from "../interfaces/IVisitor.js";
import { FileRepresentation } from "./file-representation.js";

export class ImageFile extends FileRepresentation {
    async accept(visitor: IVisitor): Promise<void> {
        await visitor.visitImageFile(this);
    }
}