// Example of how to import wasm module

// location of module specified in the WebpackPlugin
// pkg is where the compiled wasm module gets created during npm + cargo build/compile process.
// During compile/build phase, this wasm module will be included in the dist/renderer/
import("../../example-wasm-crate/pkg").then(module => {
    // refer to this for webpack + rust suggestion
    // https://rustwasm.github.io/wasm-pack/book/tutorials/hybrid-applications-with-webpack/using-your-library.html
    module.greet("hello");
});