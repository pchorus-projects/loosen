<script setup lang="ts">
import { TextAndImageData } from '~/types/text-and-image-data';

useMeta('Ergänzende Angebote');

const sections: TextAndImageData[] = [
  {
    header: 'Kirmesorgel',
    text: 'Die Original-Kirmesorgel aus dem Jahre 1911 ist ein echter Klassiker. Liebevoll restauriert, aber immer noch in ursprünglicher Ausstattung spielt sie albekannte Kirmeslieder in bestem Orgelklang.',
    image: {
      altText: 'Kirmesorgel',
      path: '/images/ergaenzende-angebote/kirmesorgel.jpg',
    },
  },
  {
    header: 'Greiferspiel "Las&nbsp;Vegas"',
    text: 'Bei unserem Greifer handelt es sich um ein modernes Warenspiel mit insgesamt zehn Spielstellen. Mit einer per Joystick gesteuerten Greiferkralle müssen die Spieler die Gewinne aus der jeweiligen Glasvitrine befördern. Mit stets aktuellen und lizensierten Markengewinnen im Plüsch- und Spielwarenbereich ist unser Greiferspiel "Las Vegas" ein interessanter und abwechslungsreicher Spielspaß für alle Generationen.',
    image: {
      altText: 'Greiferspiel "Las Vegas"',
      path: '/images/ergaenzende-angebote/greifer02.jpg',
    },
  },
];
</script>

<template>
  <div>
    <h1 class="heading heading--xxl u-margin-top-l u-max-page-width">Ergänzende Angebote</h1>
    <section
      class="section"
      :class="{ 'section--alternate': index % 2 > 0 }"
      v-for="(section, index) in sections"
      :key="section.header"
    >
      <text-and-image class="u-max-page-width" :data="section" :is-alternate="index % 2 > 0" />
    </section>
  </div>
</template>
