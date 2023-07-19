/* eslint-disable @typescript-eslint/no-var-requires */
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import dts from "rollup-plugin-dts";

const extensions = [".js", ".jsx", ".ts", ".tsx"];qwe

export default [
  {
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
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        extract: "hikari.css",
      }),
      image(),
      svgr(),
      resolve({ extensions }),
      commonjs(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
      }),
      babel({
        exclude: "node_modules/**",
        extensions,
        // babelHelpers: "runtime",
        // skipPreflightCheck: true,
        runtimeHelpers: true,
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: ["@babel/plugin-transform-runtime"],
      }),
    ],
  },
  {
    input: "dist/esm/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts.default()],
  },
];
