<script setup lang="ts">
const statistics = ref(false);

const emit = defineEmits(['close']);

function onAcceptClick(isStatisticsCookiesAllowed: boolean) {
  emit('close', isStatisticsCookiesAllowed);
}
</script>

<template>
  <modal-dialog>
    <template #header>Datenschutzeinstellungen</template>
    <template #body>
      <p class="u-font-m u-font-m--paragraph">
        Wir nutzen Cookies auf unserer Website. Einige von ihnen sind notwendig, weitere hilfreiche Cookies sorgen
        dafür, diese Website und deine Nutzererfahrung zu verbessern.
      </p>
      <ul>
        <li>
          <input id="notwendig" type="checkbox" checked disabled />
          <label for="notwendig">Notwendig</label>
        </li>
        <li>
          <input id="statistiken" v-model="statistics" type="checkbox" />
          <label for="statistiken">Statistiken</label>
        </li>
      </ul>
    </template>
    <template #footer>
      <div class="button-group">
        <button type="button" class="button button--secondary" aria-label="OK" @click="onAcceptClick(statistics)">
          Auswahl akzeptieren
        </button>
        <button type="button" class="button button--primary" aria-label="OK" @click="onAcceptClick(true)">
          Alle akzeptieren
        </button>
      </div>
    </template>
  </modal-dialog>
</template>
