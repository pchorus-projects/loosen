<script setup lang="ts">
import { TextAndImageData } from '~/types/text-and-image-data';

useMeta('Gastronomie');

const sections: TextAndImageData[] = [
  {
    header: 'Ardennen-Grill',
    text: 'Seit vielen Jahren finden Sie unseren handgefertigten und liebevoll dekorierten Ardennen-Grill zur Weihnachtszeit inmitten des Katschhofs in Aachen. Wir bieten unterschiedlichste Speisen an, von der klassischen Bratwurst über Schaschlik bis hin zum Sauerkraut. Genießen Sie die Speisen und Getränke in weihnachtlicher Atmosphäre mit Blick auf Rathaus und Dom im Herzen eines der größten Weihnachtsmärkte Deutschlands.',
    image: {
      altText: 'Ardennen-Grill',
      path: '/images/gastronomie/ardennen-grill01.jpg',
    },
  },
  {
    header: 'Vegetarischer Imbiss',
    text: 'Unser Imbiss zeichnet sich durch vegetarische, teilweise sogar vegane Spezialitäten aus. Frische Champignons, Blumenkohl und Folienkartoffeln werden in ökologisch abbaubaren Schalen serviert. Die Speisen können durch eine unserer hausgemachten Soßen verfeinert werden.',
    image: {
      altText: 'Vegetarischer Imbiss',
      path: '/images/gastronomie/vegetarischer-imbiss.jpg',
    },
  },
  {
    header: 'Kaiser Karls Rathaus Grill',
    text: 'Kaiser Karls Rathaus Grill ist etwas ganz Besonderes. Er ist ein absolutes Unikat, da er in der Aufmachung und im Baustil dem alten Aachener Rathaus nachempfunden ist. Diverse Dekorationsstücke und eine effektvolle Beleuchtung in den Abendstunden runden das Erscheinungsbild ab. Unser Angebot ist schmackhaft und erlesen. Wir bieten den Gästen unsere Bratwurst "Loosens Beste" mit Omas Rezepten aus Thüringen, die bewährte Ardennenwurst und weitere Spezialitäten an. ',
    image: {
      altText: 'Kaiser Karls Rathaus Grill',
      path: '/images/gastronomie/kaiser-karl-grill.jpg',
    },
  },
  {
    header: 'Zum Unterwirt',
    text: 'Unsere mobilen Speiseangebote werden durch den Ausschank "Zum Unterwirt" abgerundet. Der mobile Ausschank kann auf Wunsch mit einem Biergarten erweitert werden. Angeboten werden diverse Getränke, unter Anderem verschiedene Biersorten, nicht-alkoholische Getränke, Kaffeespezialitäten, Wein und Sekt sowie zahlreiche Schnäpse.',
  },
  {
    header: 'Das Gesamtkonzept',
    text: 'Gerne bieten wir die oben genannten Gastronomie-Betriebe als Gesamtkonzept an. Die verschiedenen Stände können individuell kombiniert werden und schaffen somit einen Treffpunkt mit Speisen und Getränken in gemütlicher Atmosphäre. Ergänzend bieten wir einen Toilettenwagen mit Waschmöglichkeiten.',
    image: {
      altText: 'Aachener Katschhof',
      path: '/images/gastronomie/katschhof.jpg',
    },
  },
];
</script>

<template>
  <div>
    <h1 class="heading heading--xxl u-margin-top-l u-max-page-width">Gastronomie</h1>
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
