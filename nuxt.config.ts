// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      title: 'Sorting Algorithms',
      meta: [
        {
          name: 'description',
          content:
            'A visualizer for sorting algorithms built with Nuxt 3 and TypeScript.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },
});
