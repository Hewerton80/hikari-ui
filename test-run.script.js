const { getFiles } = require("./scripts/buildUtils");
const files = getFiles("src/hooks", [".ts"]);
console.log("files");

let object = {};

files.forEach((file) => {
  // console.log(file.match(/[A-Z][a-z]+/g));
  object[`use${file.match(file.match(/[A-Z][a-z]+/g))[0]}`] = file;
});
console.log("object", object);
