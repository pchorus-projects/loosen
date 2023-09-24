import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: 'G-649SMHDN54',
      params: { anonymize_ip: true },
    },
    bootstrap: false,
  });
});
