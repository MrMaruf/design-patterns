import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";

console.log("test");

try {
  const srcPath = "./src";
  console.log("checking for access");
  if (existsSync(srcPath)) {
    console.log("access is possible. Reading...");
    const src = readdirSync(srcPath);
    src.forEach((file) => {
        readFile(`${srcPath}/${file}`);
    });
    console.log(src);
  }
} catch (error) {
  console.error(error);
}

function readFile(filePath: string) {
    try {
        const fileStats = statSync(filePath);
        const fileContents = readFileSync(filePath, 'utf8');
        console.log(fileStats)
        console.log("File contents:", fileContents)
    }
    catch(error) {
        console.error("File reading failed")
        throw error;
    }
}