import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    adapter: nodejs({
        mode: 'middleware' // or 'standalone'
    }),
    // trailingSlash: "always",
    output: "hybrid",
    build: {
        format: 'file'
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // path to your scss variables
                    additionalData: `@import "~/styles/global/sizes.scss";`
                }
            }
        }
    }
});
