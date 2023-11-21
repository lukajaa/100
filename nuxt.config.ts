// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '100 Visualizations',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/styles/main.scss'],
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui', '@vueuse/nuxt', 'nuxt-gtag'],
  colorMode: {
    classSuffix: '',
  },
  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
});
