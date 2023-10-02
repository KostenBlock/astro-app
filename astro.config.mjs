import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    // adapter: nodejs({
    //     mode: 'standalone' // or 'standalone'
    // }),
    // trailingSlash: "always",
    output: "static",
    build: {
        format: 'directory'
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
