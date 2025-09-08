// @ts-check
import { defineConfig } from 'astro/config';

// Determine site and base configuration based on environment
function getConfig() {
    const isDev = process.env.NODE_ENV === 'development';
    const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.DEPLOY_TARGET === 'github';
    
    if (isDev) {
        // Development environment
        return {
            site: 'http://localhost:4321',
            base: '/'
        };
    } else if (isGitHubPages) {
        // GitHub Pages deployment
        return {
            site: 'https://chandrabezzo.github.io',
            base: '/ldpdigital'
        };
    } else {
        // Production domain
        return {
            site: 'https://www.ldpdigital.co.id',
            base: '/'
        };
    }
}

const { site, base } = getConfig();

// https://astro.build/config
export default defineConfig({
    site,
    base,
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
