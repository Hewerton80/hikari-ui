const getFiles = require("./scripts/buildUtils");
console.log("getFiles", getFiles("dist/esm/types/Components", [".d.ts"]));
