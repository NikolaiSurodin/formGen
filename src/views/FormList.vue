<template>
  <div class="forms">
    <SideMenu>
      <template #list>
        <ul>
          <li>
            <router-link
              v-for="( item, index ) in formNavigation"
              :key="index"
              class="nav-link"
              :to="item.path"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </template>

      <template #buttons>
        <AppButton
          class="forms__button bold"
          theme="outline"
          @click="sendLogout"
        >
          Выход
        </AppButton>
      </template>
    </SideMenu>
    <div class="forms__list-container">
      <div class="forms__inner">
        <div class="forms__title">
          <h1 class="h1">Формы</h1>
          <AppButton
            class="forms__create-button bold"
            @click="$router.push( { name: 'form' } )"
          >
            Создать форму
          </AppButton>
        </div>
        <div class="forms__list">
          <FormCard
            v-for="( item, index ) in 3"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import AppButton from '@/components/UI/AppButton'
import FormCard from '@/components/FormCard'

import { formNavigation } from '@/const/formNavigation'
import { logout } from '@/services/logout'

export default {
  name: 'FormList',
  components: {
    SideMenu,
    AppButton,
    FormCard
  },
  data() {
    return {
      formNavigation
    }
  },
  methods: {
    sendLogout() {
      logout()
      this.$router.push( { name: 'auth' } )
    }
  }
}
</script>

<style lang="scss" scoped>
.forms {
  display: grid;
  grid-template-columns: 434px auto;
  height: 100vh;

  &__list-container {
    padding-top: 80px;
    background: var(--grey);;
  }

  & &__create-button {
    max-width: 180px;
  }

  &__inner {
    max-width: 825px;
    width: 100%;
    padding-left: 30px;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 80px;
  }

  & &__button {
    padding: 1rem 3.5rem;
  }
}
</style>
