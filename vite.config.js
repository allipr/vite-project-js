import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const { resolve } = path
// https://vitejs.dev/config/
export default defineConfig({
    // css:{},
    // esbuild:{},
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            comps: resolve(__dirname, 'src/components'),
            apis: resolve(__dirname, 'src/apis'),
            views: resolve(__dirname, 'src/views'),
            utils: resolve(__dirname, 'src/utils'),
            routes: resolve(__dirname, 'src/routes'),
            styles: resolve(__dirname, 'src/styles'),
        },
    },

    plugins: [vue()],
})