// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/'         // root because it’s a user site
  },
  nitro: {
    preset: 'github_pages'   // tells Nitro it uses GitHub Pages preset
  },
  ssr: false   // optional: if you prefer client side only, else you can keep SSR
})
