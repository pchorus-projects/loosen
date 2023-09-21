import { SITE_URL, SITE_TITLE } from '~/utils/constants';

export function useMeta(title?: string, description?: string, ogImage?: string) {
  const effectiveTitle = title ?? SITE_TITLE;
  useHead({
    title,
  });
  useServerSeoMeta({
    title: effectiveTitle,
    ogTitle: effectiveTitle,
    description,
    ogDescription: description,
    ogImage: ogImage ?? `${SITE_URL}/images/og-image.jpg`,
    ogLocale: 'de_DE',
    twitterCard: 'summary_large_image',
  });
}
