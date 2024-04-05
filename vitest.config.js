import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'


export default defineConfig({
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
  }
})
