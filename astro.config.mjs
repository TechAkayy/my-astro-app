import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import Pinegrow from '@pinegrow/astro-module'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    Pinegrow({
      liveDesigner: {
        experimental: {
          metaFrameworks: ['astro'],
        },
      },
      // ...
    }),
  ],
})
