<script setup lang="ts">
useMeta('Kontakt');

const onSubmit = (event: SubmitEvent) => {
  if (!(event.target instanceof HTMLFormElement)) {
    throw Error('Kontakt form submit not possible');
  }

  const isValid = event.target.checkValidity();
  event.target.classList.add('submitted');

  if (!isValid) {
    event.preventDefault();
  }
};
</script>

<template>
  <div class="u-max-page-width">
    <h1 class="heading heading--xxl heading--xxl-paragraph u-margin-top-l">Kontakt</h1>

    <h2 class="heading heading--xl heading--xl-paragraph">Anschrift</h2>
    <p class="u-font-m u-margin-bottom-xl">
      Peter Loosen GmbH<br />
      Morsbacher Str. 28<br />
      52146 Würselen<br />
      Telefon: 0177 8616040<br />
      Email: <a href="mailto:peter-loosen@gmx.net">peter-loosen@gmx.net</a>
    </p>

    <h2 class="heading heading--xl heading--xl-paragraph">Kontaktformular</h2>

    <p class="u-font-m u-margin-bottom-xl">
      Nutzen Sie bitte das folgende Formular, um uns eine Nachricht zu hinterlassen. Wir werden uns umgehend bei Ihnen
      melden.
    </p>

    <form
      name="kontakt"
      method="POST"
      action="/nachricht-gesendet/"
      @submit="onSubmit"
      novalidate
      data-netlify
      data-netlify-honeypot="bot-field"
    >
      <input name="bot-field" hidden readonly />
      <input name="form-name" value="kontakt" hidden readonly />

      <div class="form-element">
        <label for="email" class="form-element__label">Ihre Email-Adresse</label>
        <input id="email" name="email" class="form-element__input" required />
        <p class="form-element__error">Bitte geben Sie Ihre Email-Adresse ein.</p>
      </div>

      <div class="form-element">
        <label for="message" class="form-element__label">Ihre Nachricht</label>
        <textarea id="message" name="message" class="form-element__input" rows="8" required></textarea>
        <p class="form-element__error">Bitte geben Sie eine Nachricht ein.</p>
      </div>

      <button class="button button--primary u-margin-bottom-xl" type="submit">Senden</button>
    </form>
  </div>
</template>
