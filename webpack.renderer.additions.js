const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

// This webpack configuartion contains plugins to build wasm library and add in static files
// Configuration for the wasm plugin - https://github.com/wasm-tool/wasm-pack-plugin 
module.exports = {
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, "static")
    ]),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "example-wasm-crate"),
      extraArgs: "--target bundler",
      outDir: path.resolve(__dirname, "example-wasm-crate/pkg"),
      outName: "index"
    }),
  ]
};
