/* eslint-disable import/no-anonymous-default-export */
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
// import { getFiles } from "./scripts/buildUtils";
// import path from "path";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
// const extensions = [...DEFAULT_EXTENSIONS, ".ts", ".tsx"];

// function getComponentsFilesMap(path, ext) {
//   console.log("path", path);
//   const componentsFilesMap = {};
//   getFiles(path, ext).forEach((file) => {
//     componentsFilesMap[file.match(/[A-Z][a-z]+/g)[1]] = file;
//   });
//   return componentsFilesMap;
// }

// function gethHooksFilesMap(path) {
//   console.log("path", path);
//   const componentsFilesMap = {};
//   getFiles(path, [".d.ts"]).forEach((file) => {
//     componentsFilesMap[`use${file.match(file.match(/[A-Z][a-z]+/g))[0]}`] =
//       file;
//   });
//   return componentsFilesMap;
// }
// const basePath = "dist/esm/types";
// const componentsDir = path.resolve(__dirname, "src");
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
    // input: ["src/index.ts"],
    // output: [
    // {
    //   file: pkg.main,
    //   format: "cjs",
    //   exports: "named",
    //   sourcemap: true,
    // },
    //   {
    //     file: pkg.module,
    //     format: "esm",
    //     exports: "named",
    //     sourcemap: true,
    //   },
    // ],
    // plugins: [
    //   external(),
    //   postcss({ modules: true }),
    //   image(),
    //   svgr(),
    //   resolve(),
    //   typescript({
    // tsconfig: "./tsconfig.build.json",
    // declaration: true,
    // declarationDir: "dist",
    // }),
    // commonjs(),
    // terser(),
    // json(),
    // dts(),
    //   ],
    // },
    // {
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
    // input: "dist/esm/types/index.d.ts",
    // output: [{ file: "dist/index.d.ts", format: "esm" }],
    // external: [/\.css$/],
    // plugins: [dts.default()],

    //   input: path.resolve(componentsDir, "index.ts"),
    //   output: [
    //     {
    //       dir: "dist",
    //       format: "esm",
    //       sourcemap: true,
    //     },
    //   ],
    //   plugins: [
    //     external(),
    //     postcss({ modules: true }),
    //     image(),
    //     svgr(),
    //     resolve(),
    //     typescript({
    //       tsconfig: "./tsconfig.build.json",
    //       declaration: true,
    //       declarationDir: "dist",
    //     }),
    //     commonjs(),
    //     terser(),
    //   ],
    // },
    // {
    //   input: path.resolve(componentsDir, "Button/index.tsx"),
    //   output: [
    //     {
    //       file: "dist/Button.js",
    //       format: "cjs",
    //       sourcemap: true,
    //       exports: "named",
    //     },
    //     {
    //       file: "dist/Button.es.js",
    //       format: "esm",
    //       sourcemap: true,
    //       exports: "named",
    //     },
    //   ],
    //   plugins: [
    //     typescript({
    //       tsconfig: "./tsconfig.json",
    //       declaration: true,
    //       declarationDir: "dist",
    //     }),
    //     postcss({
    //       modules: true,
    //     }),
    //     terser(),
    //   ],
    //   external: ["react", "react-dom"],
    // },
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
      postcss({ modules: true }),
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
    // Adicione essa entrada:
    // preserveModules: true,
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts.default()],
  },
];
