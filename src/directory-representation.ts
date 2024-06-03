import { IVisitable } from "./interfaces/IVisited";
import { IVisitor } from "./interfaces/IVisitor";

export class DirectoryRepresentation implements IVisitable {


    accept(visitor: IVisitor) {
        visitor.visitDirectory(this);
    }

}