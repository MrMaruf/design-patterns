import {
    existsSync,
    readFileSync,
    readdirSync,
    statSync,
    accessSync,
} from "node:fs";
import { basename, dirname, extname, resolve } from "node:path";
import { DirectoryRepresentation } from "./directory-representation";
import { FileRepresentation } from "./file-representation";
import { LoggerVisitor } from "./LoggerVisitor";
import { SizeCalculationVisitor } from "./size-calculation-visitor";
export function main() {
    const srcPath = "./src";
    const srcDir = readDir(srcPath);
    const loggerVisitor = new LoggerVisitor();
    srcDir.accept(loggerVisitor);
    const sizeCalculationVisitor = new SizeCalculationVisitor()
    srcDir.accept(sizeCalculationVisitor);
    console.log("Directory size: ", sizeCalculationVisitor.getSize("KB"));
}

console.log("test");

function readDir(dirPath: string): DirectoryRepresentation {
    try {
        console.log("checking for access");
        console.log("access is possible. Reading...");
        const dirStats = statSync(dirPath);
        const files = readdirSync(dirPath);
        const absolutePath = resolve(dirPath);
        const baseName = basename(dirPath);
        const directory = new DirectoryRepresentation({
            name: baseName,
            contents: [],
            absolutePath,
            relativePath: dirPath,
            stats: dirStats,
        });
        files.forEach((file) => {
            const fullRelativePath = `${dirPath}/${file}`;
            const stats = statSync(fullRelativePath);

            if (stats.isFile()) {
                const file = readFile(fullRelativePath);
                directory.contents.push(file);
                return;
            }
            if (stats.isDirectory()) {
                const subdirectory = readDir(fullRelativePath);
                directory.contents.push(subdirectory);
                return;
            }
        });
        return directory;
    } catch (error) {
        console.error("Directory reading failed");
        throw error;
    }
}

function readFile(filePath: string): FileRepresentation {
    try {
        const stats = statSync(filePath);
        const absolutePath = resolve(filePath);
        const baseName = basename(filePath);
        const extension = extname(filePath);
        const fileRepresentation = new FileRepresentation({
            name: baseName.split(".")[0],
            relativePath: filePath,
            stats: stats,
            extension,
            absolutePath,
        });
        return fileRepresentation;
    } catch (error) {
        console.error("File reading failed");
        throw error;
    }
}
