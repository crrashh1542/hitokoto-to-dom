import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
               chunkFileNames: '[name].js',
               entryFileNames: '[name].js',
            }
        }
    }
})