// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 1. Reliable check: Are we running the "build" command or GitHub Actions?
const isProd = process.argv.includes('build');
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages
    ? 'https://alexnorb.github.io'
    : isProd
    ? 'https://vvsprojekt.se'
    : 'http://localhost:4321',
  base: isGitHubPages ? '/vvsprojekt/' : '/',

  // 2. We explicitly tell TypeScript the result is one of the allowed strings
  trailingSlash: isProd ? /** @type {'always'} */ ('always') : /** @type {'ignore'} */ ('ignore'),

  image: {
    domains: ['images.unsplash.com'],
  },

  prefetch: true,

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: { sv: 'sv-SE' }
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
