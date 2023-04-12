/* eslint-disable import/no-anonymous-default-export */
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";
import { getFiles } from "./scripts/buildUtils";

function getComponentsFilesMap(path, ext) {
  console.log("path", path);
  const componentsFilesMap = {};
  getFiles(path, ext).forEach((file) => {
    componentsFilesMap[file.match(/[A-Z][a-z]+/g)[1]] = file;
  });
  return componentsFilesMap;
}
function gethHooksFilesMap(path) {
  console.log("path", path);
  const componentsFilesMap = {};
  getFiles(path, [".d.ts"]).forEach((file) => {
    componentsFilesMap[`use${file.match(file.match(/[A-Z][a-z]+/g))[0]}`] =
      file;
  });
  return componentsFilesMap;
}
const basePath = "dist/esm/types";

export default [
  {
    // input: {
    //   ...getComponentsFilesMap("src/Components/ui", ["index.tsx"]),
    // },
    //   input: {
    //     Button: "src/Components/ui/forms/Button/index.tsx",
    //   },
    // output: {
    //   dir: "./dist",
    //   format: "esm",
    //   sourcemap: true,
    //   exports: "named",
    //   inlineDynamicImports: false,
    // },
    //   treeshake: {
    //     moduleSideEffects: false,
    //   },
    input: ["src/index.ts"],
    output: [
      // {
      //   file: pkg.main,
      //   format: "cjs",
      //   exports: "named",
      //   sourcemap: true,
      // },
      {
        file: pkg.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      postcss({ modules: true }),
      image(),
      svgr(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.build.json",
        // declaration: true,
        // declarationDir: "dist",
      }),
      commonjs(),
      terser(),
      json(),
      // dts(),
    ],
  },
  {
    // input: {
    //   // Checkbox: "src/Components/ui/forms/Checkbox/index.tsx",
    //   // Switch: "src/Components/ui/forms/Switch/index.tsx",
    //   // Button: "src/Components/ui/forms/Button/index.tsx",
    //   ...getComponentsFilesMap(`${basePath}/Components/ui`, ["index.d.ts"]),
    //   ...gethHooksFilesMap(`${basePath}/hooks`),
    //   HikariProviders: `${basePath}/context/index.d.ts`,
    //   theme: `${basePath}/styles/theme.d.ts`,
    //   // theme: "src/styles/theme.ts",
    //   // ...getComponentsFilesMap("src/context", ["index.tsx"]),
    // },
    // output: {
    //   dir: "./dist",
    //   format: "esm",
    //   sourcemap: true,
    //   exports: "named",
    //   inlineDynamicImports: false,
    // },
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts.default()],
  },
];
