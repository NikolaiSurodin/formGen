<template>
  <div class="participant-form">
    <div class="participant-form__form-title">
      <h2 class="h2">Форма регистрации участников</h2>
    </div>
    <div class="participant-form__fields">
      <div
        class="participant-form__fields-block"
        v-for="( item, index ) in user.fieldList"
        :key="index"
      >
        <AppInput
          class="form-item__filed"
          v-if="item.type === 'text' || item.type === 'number'"
          :label="item.title"
          :type="item.type"
          :required="item.isRequired && !item.value"
          v-model="item.value"
        />
        <AppSelect
          v-if="item.type === 'select' || item.type === 'multiselect'"
          :taggable="item.model_type === 'multiselect'"
          :multiple="item.model_type === 'multiselect'"
          :options="item.options"
          :placeholder="item.title"
          label="title"
          track-by="title"
        />
      </div>
    </div>
    <AppCheckbox
      class="participant-form__checkbox"
      label="Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности"
    />
    <AppButton
      class="participant-form__send-button"
      :is-disabled="isError && !!Object.keys( isError ).length"
      @click="send"
    >
      Отправить
    </AppButton>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppInput from '@/components/UI/AppInput'
import AppCheckbox from '@/components/UI/AppCheckbox'
import AppSelect from '@/components/UI/AppSelect'

import { educationOptions } from '@/const/educationOptions'
import { educationDocumentsOptions } from '@/const/educationDocumentsOptions'

export default {
  name: 'ParticipantForm',
  components: {
    AppInput,
    AppButton,
    AppCheckbox,
    AppSelect
  },
  props: {
    user: {
      type: Object,
      default: () => ( {} )
    }
  },
  data() {
    return {
      educationOptions,
      educationDocumentsOptions
    }
  },
  computed: {
    isError() {
      return this.user.fieldList.find( ( el ) => {
        return !!( el.isRequired && !el.value )
      } )
    }
  },
  methods: {
    send() {
      if( this.isError ) {
        return
      }
      this.$toast.open( {
        message: 'Форма отправлена',
        position: 'top',
      } )
    }
  }
}
</script>

<style lang="scss" scoped>
.participant-form {
  background-color: var(--white);
  border-radius: 20px;
  width: 350px;
  min-height: 504px;
  padding: 40px;

  &__form-inner {
    flex: 1;
  }

  &__form-title {
    h1 {
      margin-bottom: 30px;
    }
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 30px 0;
  }

  & &__send-button {
    margin-top: 50px;
    width: 100%;
    max-width: 100%;
  }
}
</style>

<style lang="scss">
.participant-form {
  &__checkbox {
    .default-checkbox__label {
      align-items: flex-start;
      opacity: 0.5;
    }
  }
}
</style>
