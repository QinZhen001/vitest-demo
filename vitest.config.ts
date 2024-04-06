import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// https://www.npmjs.com/package/vite-tsconfig-paths
// Give vite the ability to resolve imports using TypeScript's path mapping.
// import tsconfigPaths from 'vite-tsconfig-paths'


// No __dirname under Node ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// jsdom
// jsdom is a pure-JavaScript implementation of many web standards, 
// notably the WHATWG DOM and HTML Standards, for use with Node.js



export default defineConfig({
  // plugins: [tsconfigPaths({ root: __dirname })],
  test: {
    // By default, vitest does not provide global APIs for explicitness
    globals: true,
    // https://vitest.dev/config/#environment
    environment: 'jsdom',
    // A list of glob patterns that match your test files.
    // include: ['./src/**/*.(spec|test).[jt]s?(x)'],
    //
    // https://vitest.dev/config/#server
    // Vite will process inlined modules. This could be helpful to handle packages that ship .js in ESM format (that Node can't handle).
    // server: { deps: { inline: ['redux', '@reduxjs/toolkit'] } },
    //  
    // Path to setup files. They will be run before each test file.
    setupFiles: ['./vitest.setup.ts'],
  }
})
