'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var typescript = require('@rollup/plugin-typescript');
var commonjs = require('@rollup/plugin-commonjs');
var external = require('rollup-plugin-peer-deps-external');
var resolve = require('@rollup/plugin-node-resolve');
var json = require('@rollup/plugin-json');
var postcss = require('rollup-plugin-postcss');
var image = require('@rollup/plugin-image');
var svgr = require('@svgr/rollup');
var rollupPluginTerser = require('rollup-plugin-terser');
var dts = require('rollup-plugin-dts');
var pkg = require('./package.json');

/* eslint-disable import/no-anonymous-default-export */
// import { getFiles } from "./scripts/buildUtils";
// import {Button} from './src/Components/forms/Button'
const extensions = [".js", ".ts", ".jsx", ".tsx"];

var rollup_config = [
  {
    // input: [
    //   "src/index.ts",
    //   // ...getFiles("./src/Components", extensions),
    //   // ...getFiles("./src/hooks", extensions),
    //   // ...getFiles("./src/utils", extensions),
    // ],
    // input: {
    //   Button:'src/Components/forms/Button/index.tsx'
    // },
    // output: {
    //   dir: "./dist",
    //   format: "esm",
    //   sourcemap: true,
    //   exports: "named",
    //   inlineDynamicImports: false,
    // },
    // treeshake:{
    //   moduleSideEffects: false
    // },
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
      rollupPluginTerser.terser(),
      json(),
      // dts(),
    ],
  },
  {
    input: {
      Button: "dist/esm/types/Components/forms/Button/index.d.ts",
    },
    output: {
      dir: "./dist",
      format: "esm",
      sourcemap: true,
      exports: "named",
      inlineDynamicImports: false,
    },
    // input: "dist/esm/types/index.d.ts",
    // output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts.default()],
  },
];

exports.default = rollup_config;
