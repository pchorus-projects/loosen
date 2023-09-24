<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header id="modalTitle" class="heading heading--l heading--l-paragraph">
          <slot name="header" />
        </header>
        <section id="modalDescription" class="u-margin-bottom-l">
          <slot name="body" />
        </section>
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use 'assets/styles/variables';

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  display: flex;
  flex-direction: column;
  max-width: math.div(variables.$max-content-width, 2);
  overflow-x: auto;
  background: variables.$background-color-default;
  box-shadow: 2px 2px 20px 1px;
  padding: variables.$space-l;
}
</style>
