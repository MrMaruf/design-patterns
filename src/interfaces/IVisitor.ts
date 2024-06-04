import { DirectoryRepresentation } from "../directory-representation";
import { FileRepresentation } from "../file-representation";
import { IVisitable } from "./IVisited";

export interface IVisitor {
    visitFile(file: FileRepresentation): void;
    visitDirectory(directory: DirectoryRepresentation): void;
}