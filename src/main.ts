import {
    existsSync,
    readFileSync,
    readdirSync,
    statSync,
    accessSync,
} from "node:fs";
export function main() {
    const srcPath = "./src";
    readDir(srcPath);
}

console.log("test");

function readDir(dirPath: string) {
    try {
        console.log("checking for access");
        if (existsSync(dirPath)) {
            console.log("access is possible. Reading...");
            const dirStats = statSync(dirPath);
            console.log(dirStats);
            const files = readdirSync(dirPath);
            console.log(files);
            files.forEach((file) => {
                if (file.includes(".")) {
                    readFile(`${dirPath}/${file}`);
                    continue;
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
}

function readFile(filePath: string) {
    try {
        console.log(existsSync(filePath));
        console.log("checking for access", accessSync(filePath));
        const fileStats = statSync(filePath);
        // const fileContents = readFileSync(filePath, 'utf8');
        console.log(fileStats);
        // console.log("File contents:", fileContents)
    } catch (error) {
        console.error("File reading failed");
        throw error;
    }
}
