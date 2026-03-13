// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 静态站点输出，兼容 Vercel / Cloudflare Pages
  output: 'static',
  // 站点 URL，请替换为你的实际域名
  site: 'https://your-domain.com',

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
      transformers: [],
    },
  },

  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  }), react(), sitemap()]
});
