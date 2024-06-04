import { Stats } from "node:fs";
import { IVisitable } from "./interfaces/IVisited";
import { IVisitor } from "./interfaces/IVisitor";
import { FileRepresentation } from "./file-representation";

export class DirectoryRepresentation implements IVisitable {
    public stats: Stats;
    public name: string;
    public relativePath: string;
    public contents: (FileRepresentation | DirectoryRepresentation)[];
    public absolutePath: string;

    constructor(properties: Omit<DirectoryRepresentation, "accept">) {
        if (typeof properties.stats !== "object" || properties.stats === null) {
            throw new TypeError("stats is not an object or is null");
        }
        this.stats = properties.stats;
        if (typeof properties.name !== "string") {
            throw new TypeError("name is not a string");
        }
        this.name = properties.name;
        if (typeof properties.relativePath !== "string") {
            throw new TypeError("relativePath is not a string");
        }
        this.relativePath = properties.relativePath;
        if (!Array.isArray(properties.contents)) {
            throw new TypeError("extension is not a string");
        }
        this.contents = properties.contents;
        if (typeof properties.absolutePath !== "string") {
            throw new TypeError("absolutePath is not a string");
        }
        this.absolutePath = properties.absolutePath;
    }

    accept(visitor: IVisitor) {
        visitor.visitDirectory(this);
    }
}
