import * as Sentry from '@sentry/browser';

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    dsn: 'https://3c41feb2ce84463ea45061bb19bfbc14@o222451.ingest.sentry.io/5228953',
  });
});
