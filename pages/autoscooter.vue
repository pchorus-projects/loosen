<script setup lang="ts">
import { TextAndImageData } from '~/types/text-and-image-data';

useMeta('Autoscooter', 'Seit 1928 ist die Familie Loosen mit Ihrem Autoscooter auf Reisen.');

const firstSection: TextAndImageData = {
  header: 'Der XXL-Autoscooter',
  text: 'Seit 1928 ist die Familie Loosen mit Ihrem Autoscooter auf Reisen. Der Loosen Autoscooter bietet Mehrwert in Form von größerer Fahrbahn, mehr Licht und konsequent über alle Seiten durchgestaltete Ornamente und Leuchtelemente. Ideal für eine Platzierung zwischen zwei Laufstraßen.',
  image: {
    altText: 'Autoscooter',
    path: '/images/autoscooter/autoscooter04.jpg',
  },
};

const sections: TextAndImageData[] = [
  {
    header: 'Spaß garantiert',
    text: 'Unsere 30 Fahrzeuge sind hochmodern und werden regelmäßig überprüft und gewartet, um unseren Fahrgästen höchsten Fahrkomfort unter Berücksichtigung aller relevanten Sicherheitsaspekten zu gewährleisten. Seit 2019 sind sechs unserer Fahrzeuge mit der neuen Drifting-Technologie ausgestattet für noch mehr Fahrspaß.',
    image: {
      altText: 'Drifting Cars',
      path: '/images/autoscooter/autoscooter05.jpg',
    },
  },
  {
    header: 'Lange Tradition',
    text: 'Bereits seit 1928 wird unser Fahrgeschäft in Familienbesitz betrieben, mittlerweile in der 8. Generation. All die Jahre sind wir der Tradition treu geblieben, in konsequenter Qualitätsoffensive in jeder Beziehung auf dem aktuellen Stand der Technik zu sein. So verfügt unser Autoscooter über eine High-End Dolby Surround Anlage, die ein optimales, auf den Bereich des Autoscooters konzentriertes Klangerlebnis garantiert.',
    image: {
      altText: 'Transport',
      path: '/images/autoscooter/autoscooter01.jpg',
    },
  },
];
</script>

<template>
  <video autoplay playsinline muted loop class="hero-video">
    <source src="~/assets/videos/as_krefeld.mp4" type="video/mp4" />
  </video>

  <nuxt-img class="hero-image" src="/images/autoscooter/hero-image.jpg"></nuxt-img>

  <h1 class="heading heading--xxl u-margin-top-l u-max-page-width">Autoscooter</h1>
  <section class="section">
    <text-and-image class="u-max-page-width" :data="firstSection" :is-alternate="false" />
  </section>

  <section class="section section--alternate">
    <div class="technical-data u-max-page-width">
      <dl class="description-list description-list--flex-row description-list--large">
        <div>
          <dt class="description-list__term">Hersteller</dt>
          <dd class="description-list__description">Adesko</dd>
        </div>
        <div>
          <dt class="description-list__term">Baujahr</dt>
          <dd class="description-list__description">2022</dd>
        </div>
        <div>
          <dt class="description-list__term">Maße</dt>
          <dd class="description-list__description">34m x 17m</dd>
        </div>
        <div>
          <dt class="description-list__term">Fahrzeuge</dt>
          <dd class="description-list__description">30</dd>
        </div>
        <div>
          <dt class="description-list__term">Drift-Cars</dt>
          <dd class="description-list__description">6</dd>
        </div>
        <div>
          <dt class="description-list__term">Lichter</dt>
          <dd class="description-list__description">50.000</dd>
        </div>
      </dl>
    </div>
  </section>

  <section
    v-for="(section, index) in sections"
    :key="section.header"
    class="section"
    :class="{ 'section--alternate': index % 2 > 0 }"
  >
    <text-and-image class="u-max-page-width" :data="section" :is-alternate="index % 2 === 0" />
  </section>

  <section class="section">
    <h2 class="heading heading--xl heading--xl-paragraph u-max-page-width">Klimaschutz</h2>
    <div class="u-text-columns u-max-page-width">
      <p class="u-font-m">
        Klimaschutz und Umweltbewusstsein sind brandaktuelle Themen in unserer heutigen Industriegesellschaft. Wir als
        langjähriger erfolgreicher Betreiber von Fahrgeschäften auf Volksfesten haben uns zum Ziel gesetzt, hier
        Verantwortung zu übernehmen und deutliche Signale zu setzen.
      </p>
      <p class="u-font-m">
        Natürlich lebt ein Geschäft wie unser Autoscooter vor Allem von optischen und akustischen Reizen, die unsere
        Besucher für unser Fahrgeschäft begeistern. Da während des Betriebs hohe Stromverbrauchswerte erreicht werden,
        haben wir konsequent alle Lichter in unserem Fahrgeschäft durch umweltfreundliche LED-Leuchten ersetzt, so dass
        wir jetzt stolz sagen können, den Stromverbrauch um unglaubliche 50% reduziert zu haben.
      </p>
      <p class="u-font-m">
        Obwohl die neuen LED-Leuchten einen wesentlich geringeren Stromverbrauch aufweisen, verfügen sie über eine
        deutlich intensivere Leuchtkraft. Dadurch wird unser Erscheinungsbild vor allem bei Dunkelheit noch attraktiver.
        Hinzu kommt die erheblich längere Haltbarkeit im Vergleich zu herkömmlichen Glühbirnen, sodass die Umwelt durch
        geringere Abfallmengen zusätzlich entlastet wird.
      </p>
    </div>
  </section>

  <section class="section section--alternate">
    <h2 class="heading heading--xl heading--xl-paragraph u-max-page-width">Loosen's Autoscooter neu definiert</h2>
    <p class="u-font-m u-font-m--paragraph u-max-page-width">
      Seit über acht Jahrzehnten reist Loosen mit Autoscootern über die Volksfeste der Region. Eine Zeitspanne, die
      besonders im Bereich technischer Produkte von einer gewaltigen Veränderung geprägt ist. Nicht zuletzt der Schritt
      von der analogen zur digitalen Technik der letzten beiden Jahrzehnte hat Möglichkeiten geschaffen, die Abläufe und
      Prozesse, ebenfalls bei einem Kirmesgeschäft, effizienter zu gestalten. Nicht zuletzt vor dem Hintergrund der
      aktuellen Klimadebatte und den stetig steigenden Kosten haben wir uns deshalb entschlossen, ab 2022 Loosen's
      Autoscooter neu zu definieren
    </p>
    <p class="u-font-m u-font-m--paragraph u-max-page-width">
      Nach langer Planung hat die Firma Adesko NV in Belgien mit großer Vorfreude und Engagement den Bau des neuen,
      maßgefertigten XXL-Autoscooter begonnen und schließlich im Frühjahr 2022 abgeschlossen.
    </p>

    <h3 class="heading heading--l heading--l-paragraph u-max-page-width">Neueste Technik</h3>
    <p class="u-font-m u-font-m--paragraph u-max-page-width">
      Der neue Autoscooter hat sein markantes, optisches Bild mit seinen Zinnen erhalten und ist somit weiterhin ein
      Augenschmaus im Platzbild. Der neue XXL-Zwei-Säulen-Scooter ist gespickt mit aktueller Technik. Obwohl die
      Stromaufnahme nur noch 80kW statt bisher 120kW beträgt, wird dank der LED-Technik der 34 x 17 Meter große Scooter
      hell im Platzbild leuchten. Hochmoderne Elektromotoren in den Chaisen sind ein weiterer Faktor, um weniger Energie
      als bislang üblich zu verbrauchen.
    </p>

    <h3 class="heading heading--l heading--l-paragraph u-max-page-width">Innovative Dachkonstruktion</h3>
    <p class="u-font-m u-font-m--paragraph u-max-page-width">
      Einmalig ist die neue Dachkonstruktion. Fallendes Regenwasser wird aufgefangen und über die Säulen in Tanks
      geleitet. So muss niemand mehr bei schlechtem Wetter vom Regen durch die Traufe, um den Scooter zu erreichen.
      Zusätzlich wird Frischwasser zum Putzen und Waschen gespart.
    </p>

    <h3 class="heading heading--l heading--l-paragraph u-max-page-width">Schneller Transport</h3>
    <p class="u-font-m u-font-m--paragraph u-max-page-width">
      Zum Versetzen des Autoscooters sind nur noch zwei Transporte erforderlich, um von Platz zu Platz zu reisen. Die
      Aufbauzeit inklusive Wartung und Pflege ist auf zwei Tage gekürzt. Die Abbauzeit beträgt lediglich drei bis vier
      Stunden.
    </p>
  </section>
</template>

<style lang="scss" scoped>
@use 'assets/styles/variables';

.technical-data {
  padding: 0 variables.$space-m;
}

@media (max-width: variables.$max-width-mobile) {
  .image {
    border-radius: 0;
  }
}
</style>
