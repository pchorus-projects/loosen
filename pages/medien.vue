<script setup lang="ts">
useMeta(
  'Medien',
  'Hier ein paar Eindrücke unseres Imbiss auf dem Aachener Weihnachtsmarkt und von unserem Autoscooter.',
);
</script>

<template>
  <h1 class="heading heading--xxl heading--xxl-paragraph u-margin-top-l u-max-page-width">Medien</h1>
  <p class="u-max-page-width">
    Hier ein paar Eindrücke. Mehr Bilder, Videos und Informationen findet Ihr bei
    <a aria-label="Instagram" href="https://www.instagram.com/loosen_schausteller/" target="_blank" rel="noopener">
      Instagram
    </a>
    und
    <a href="https://www.youtube.com/@LoosenSchausteller" target="_blank" rel="noopener">YouTube</a>.
  </p>

  <section class="section">
    <h2 class="heading heading--xl heading--xl-paragraph u-max-page-width">Loosen bei YouTube</h2>

    <div class="video-list u-max-page-width">
      <iframe
        v-for="video in youtubeVideos"
        :key="video.embedUrl"
        class="video-list__item"
        :src="video.embedUrl"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'assets/styles/variables';

.video-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: variables.$space-m;

  &__item {
    width: 100%;
    aspect-ratio: 560/315;
    border: none;
  }
}

@media (max-width: variables.$max-width-mobile) {
  .video-list {
    grid-template-columns: 1fr;
  }
}
</style>
