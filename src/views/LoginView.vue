<template>
  <div class="auth-page">
    <div class="auth-page__form">
      <div class="auth-page__container">
        <div class="auth-page__form-inner">
          <div class="auth-page__form-title">
            <div class="auth-page__logo">
              <img src="../assets/images/logo.svg" alt="logo">
            </div>
            <h1 class="h1">Авторизация</h1>
          </div>
          <div class="auth-page__fields">
            <AppInput
              label="Логин"
              id="name"
              v-model="name"
            />
            <AppInput
              label="Пароль"
              id="password"
              v-model="password"
              type="password"
            />
          </div>
          <AppButton
            class="auth-page__login-button"
            @click="sendLogin"
            :is-disabled="isDisabledLoginButton"
          >
            Вход
          </AppButton>
        </div>
        <section class="auth-page__help">
          <p>Если возникла проблема, то можете написать
            <a
              class="auth-page__help-link link"
              href="#"
              target="_blank"
            >Алёне из Сибтеха
            </a>
          </p>
          <p>
            С любовью, ваш
            <a
              class="auth-page__help-link link"
              href="#"
              target="_blank"
            >Сибтех
            </a>
          </p>
        </section>
      </div>

    </div>
    <div class="auth-page__image">
      <div class="auth-page__image-item auth-page__image-item--cub-407">
        <img src="../assets/images/cubs/cub407.png" alt="cub">
      </div>
      <div class="auth-page__image-item auth-page__image-item--cub-408">
        <img src="../assets/images/cubs/cub408.png" alt="cub">
      </div>
      <div class="auth-page__image-item auth-page__image-item--cub-410">
        <img src="../assets/images/cubs/cub410.png" alt="cub">
      </div>
      <div class="auth-page__image-item auth-page__image-item--cub-411">
        <img src="../assets/images/cubs/cub411.png" alt="cub">
      </div>
      <div class="auth-page__image-item auth-page__image-item--cub-406">
        <img src="../assets/images/cubs/cub406.png" alt="cub">
      </div>
      <div class="auth-page__image-item auth-page__image-item--cub-409">
        <img src="../assets/images/cubs/cub409.png" alt="cub">
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/UI/AppInput'
import AppButton from '@/components/UI/AppButton'

import { login } from '@/services/login.service'

export default {
  name: 'LoginView',
  components: {
    AppInput,
    AppButton
  },
  data() {
    return {
      name: '',
      password: ''
    }
  },
  computed: {
    isDisabledLoginButton() {
      return !this.name || !this.password
    }
  },
  methods: {
    sendLogin() {
      if( !this.isDisabledLoginButton ) {
        login()
        this.$router.push( { name: 'forms' } )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-page {
  display: grid;
  grid-template-columns: 624px auto;
  height: 100vh;

  &__container {
    padding: 80px 10px 62px 10px;
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__image {
    position: relative;
    background-color: var(--green);
    overflow: hidden;
  }

  &__image-item {
    position: absolute;


    &--cub-407 {
      left: 60px;
      top: 44px;
    }

    &--cub-408 {
      right: 105px;
      top: 92px;
    }

    &--cub-410 {
      left: 25%;
      top: 203px;
    }

    &--cub-411 {
      right: 97px;
      bottom: 340px;
    }

    &--cub-406 {
      left: -176px;
      bottom: 0;
    }

    &--cub-409 {
      right: 3px;
      bottom: 0;
    }
  }

  &__form-inner {
    flex: 1;
  }

  &__form-title {
    h1 {
      margin-bottom: 30px;
    }
  }

  &__logo {
    margin-bottom: 30px;
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__login-button {
    margin-top: 30px;
  }
}
</style>
