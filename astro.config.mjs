// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://allyonoupdate.com',
  trailingSlash: 'always',
  redirects: {
    // Fixes a copy-paste data-entry error: this app's slug/icon filename
    // accidentally inherited an auto-generated export ID from the source
    // image asset instead of a clean name-derived slug (see git history on
    // src/data/apps.json). No GSC signal was ever recorded for the old URL
    // (checked before fixing), but it's live/indexed, so redirect rather
    // than let it 404.
    '/app/okrummy-e1760950706977-1/': '/app/ok-rummy/'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});