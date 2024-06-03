import { Stats } from "fs";
import { IVisitable } from "./interfaces/IVisited";
import { IVisitor } from "./interfaces/IVisitor";

export class FileRepresentation implements IVisitable {
  public stats: Stats;
  public name: string;
  public relativePath: string;
  public fullPath: string;

  constructor(properties: FileRepresentation) {
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
    if (
      properties.fullPath !== undefined &&
      typeof properties.fullPath !== "string"
    ) {
      throw new TypeError("fullPath provided is not a string");
    }
    this.fullPath = properties.fullPath;
  }
    accept(visitor: IVisitor) {
        visitor.visitFile(this);
    }


}
