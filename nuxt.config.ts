// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', 'nuxt-simple-sitemap'],
  css: ['@/assets/styles/styles.scss'],
  devtools: { enabled: true },
  image: {
    provider: 'ipx',
  },
  site: {
    url: 'https://loosen.ac',
  },
});
