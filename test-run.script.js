const { getFiles } = require("./scripts/buildUtils");
const files = getFiles("dist/esm/types/src/Components/ui", ["index.d.ts"]);
console.log("files");

let object = {};

files.forEach((file) => {
  object[file.match(/[A-Z][a-z]+/g)[1]] = file;
});
console.log("object", object);
