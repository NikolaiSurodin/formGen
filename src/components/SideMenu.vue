<template>
  <div class="side-menu">
    <div class="side-menu__form">
      <div class="side-menu__container">
        <div class="side-menu__form-inner">
          <div
            class="side-menu__logo"
            role="button"
            @click="$router.push( { name: 'forms' } )"
          >
            <img src="../assets/images/logo.svg" alt="logo">
          </div>
          <div
            class="side-menu__back-button"
            role="button"
            v-if="isBackButton"
            @click="$router.back()"
          >
            <img src="../assets/icons/arrow-left.svg" alt="arrow">
            Назад
          </div>
          <div class="side-menu__fields">
            <slot name="list"></slot>
          </div>
        </div>
        <section class="side-menu__help">
          <slot name="buttons"></slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideMenu',
  props: {
    isBackButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.side-menu {
  display: grid;
  grid-template-columns: 434px auto;
  height: 100vh;

  &__container {
    padding: 80px 10px 62px 10px;
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
  }

  &__form-inner {
    flex: 1;
  }

  &__logo, &__back-button {
    margin-bottom: 30px;
  }

  &__back-button {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  &__fields {
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
  }

  &__login-button {
    margin-top: 30px;
  }
}
</style>
