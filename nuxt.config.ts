export default defineNuxtConfig({
  compatibilityDate: '2024-07-06',
  extends: ['shadcn-docs-nuxt'],
  devtools: { enabled: true },
  routeRules: {
    '/': { redirect: '/getting-started' },
  },
})
