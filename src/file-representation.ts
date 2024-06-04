import { Stats } from "fs";
import { IVisitable } from "./interfaces/IVisited";
import { IVisitor } from "./interfaces/IVisitor";

export class FileRepresentation implements IVisitable {
    public stats: Stats;
    public name: string;
    public relativePath: string;
    public extension: string;
    public absolutePath: string;

    constructor(properties: Omit<FileRepresentation, "accept">) {
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
        if (typeof properties.extension !== "string") {
            throw new TypeError("extension is not a string");
        }
        this.extension = properties.extension;
        if (typeof properties.absolutePath !== "string") {
            throw new TypeError("absolutePath is not a string");
        }
        this.absolutePath = properties.absolutePath;
    }

    accept(visitor: IVisitor) {
        visitor.visitFile(this);
    }
}
