<script setup lang="ts">
import { homeSections } from '~/utils/constants';

useMeta('Home');
</script>

<template>
  <div>
    <section
      v-for="(homeSection, index) in homeSections"
      :key="homeSection"
      class="section"
      :class="{ 'section--alternate': index % 2 > 0 }"
    >
      <text-and-image class="u-max-page-width" :data="homeSection" :is-alternate="index % 2 > 0" />
    </section>
  </div>
</template>
