const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");
const postcss = require("rollup-plugin-postcss");
const image = require("@rollup/plugin-image");
const svgr = require("@svgr/rollup");

const pkg = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    image(),
    svgr(),
    resolve(),
    typescript(),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js"],
    }),
    json(),
  ],
};
