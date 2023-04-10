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

const extensions = [".js", ".ts", ".jsx", ".tsx"];

export default [
  {
    input: [
      "src/index.ts",
      ...getFiles("./src/Components", extensions),
      ...getFiles("./src/hooks", extensions),
      ...getFiles("./src/utils", extensions),
    ],
    output: {
      // file: pkg.module,
      dir: "./dist",
      format: "esm",
      // preserveModules: true,
      // preserveModulesRoot: "src",
      sourcemap: true,
      // file: pkg.main,
      exports: "named",
      inlineDynamicImports: false,
    },
    // output: [
    //   // {
    //   //   file: pkg.main,
    //   //   format: "cjs",
    //   //   exports: "named",
    //   //   sourcemap: true,
    //   // },
    //   {
    //     file: pkg.module,
    //     format: "esm",
    //     exports: "named",
    //     sourcemap: true,
    //   },
    // ],
    plugins: [
      external(),
      postcss({ modules: true }),
      image(),
      svgr(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        // tsconfig: "./tsconfig.build.json",
        // declaration: true,
        // declarationDir: "dist",
        // typescript(),
      }),
      commonjs({
        // include: ["node_modules/**"],
        // exclude: ["**/*.stories.js"],
      }),
      terser(),
      json(),
      // dts(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts.default()],
  },
];
