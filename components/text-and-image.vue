<script setup lang="ts">
import type { TextAndImageData } from '~/types/text-and-image-data';

defineProps<{ data: TextAndImageData; isAlternate: boolean }>();
</script>

<template>
  <div class="root" :class="{ 'root--alternate': isAlternate }">
    <div class="description" :class="{ 'description--alternate': isAlternate }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h2 class="heading heading--xl heading--xl-paragraph" v-html="data.header"></h2>
      <p class="u-font-m">{{ data.text }}</p>
      <nuxt-link
        v-if="data.link"
        :to="data.link.to"
        :aria-label="data.link.text"
        class="button button--primary u-margin-top-m"
        >{{ data.link.text }}</nuxt-link
      >
    </div>
    <img v-if="data.image" class="image" :src="data.image.path" :alt="data.image.altText" />
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/variables';

.root {
  display: flex;
  align-items: center;

  &--alternate {
    flex-direction: row-reverse;
  }
}

.description {
  margin-right: variables.$space-l;
  flex: 1;

  &--alternate {
    margin-right: 0;
    margin-left: variables.$space-l;
  }
}

@media (max-width: variables.$max-width-mobile) {
  .image {
    width: 100vw;
    border-radius: 0;
  }
}

@media (max-width: variables.$max-width-tablet) {
  .root {
    flex-direction: column;
  }

  .description {
    margin: 0 0 variables.$space-l 0;

    &--alternate {
      margin: 0 0 variables.$space-l 0;
    }
  }

  // IE11 does not handle flex-box in flex-box both with direction column correctly
  @media (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .root {
      display: block;
    }
  }
}
</style>
