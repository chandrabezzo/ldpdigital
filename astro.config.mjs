// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://ldpdigital.com',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        build: {
            cssMinify: true,
            minify: 'esbuild',
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['astro']
                    }
                }
            }
        }
    }
});
