<script setup lang="ts">
import { homeSections } from '~/utils/constants';

useMeta(
  'Schaustellerbetrieb Loosen',
  'Wir sind die Schaustellerfamilie Loosen aus Würselen bei Aachen. Mit unserem Autoscooter und diversen Gastronomiebetrieben sind wir auf Volksfesten in der Region vertreten.',
);
</script>

<template>
  <video autoplay playsinline muted loop class="hero-video">
    <source src="~/assets/videos/oecherbend22.mp4" type="video/mp4" />
  </video>

  <nuxt-img class="hero-image" src="/images/home/hero-image.jpg" alt="Autoscooter Loosen vor Riesenrad"></nuxt-img>

  <section
    v-for="(homeSection, index) in homeSections"
    :key="homeSection"
    class="section"
    :class="{ 'section--alternate': index % 2 > 0 }"
  >
    <text-and-image class="u-max-page-width" :data="homeSection" :is-alternate="index % 2 > 0" />
  </section>
</template>
