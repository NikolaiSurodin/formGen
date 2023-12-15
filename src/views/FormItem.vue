<template>
  <div class="form-item">
    <SideMenu :is-back-button="true">
      <template #list>
        <ul>
          <li
            v-for="( item, index ) in navigation"
            :key="index"
          >
            <router-link :to="item.path" class="nav-link">{{ item.title }}</router-link>
          </li>
        </ul>
      </template>

      <template #buttons>
        <div class="form-item__buttons">
          <AppButton
            theme="outline"
            @click="openViewForm"
          >
            Скрипт
          </AppButton>
          <AppButton @click="saveForm">Сохранить</AppButton>
        </div>
      </template>
    </SideMenu>
    <div class="form-item__settings">
      <div class="form-item__settings-container">
        <div class="form-item__title">
          <h1 class="h1">Поля</h1>
        </div>
        <div class="form-item__block">
          <div class="form-item__block-title">
            <h2 class="h2">Скрытые поля</h2>
          </div>
          <AddItem text="Добавить поле" />
        </div>
        <div class="form-item__block">
          <div class="form-item__block-title">
            <h2 class="h2">Поля</h2>
          </div>
          <div class="form-item__block-list">
            <div
              class="form-item__filed-block"
              v-for="( item, index ) in user.fieldList"
              :key="index"
            >
              <div class="form-item__filed-block-description">
                <div class="form-item__filed-block-description-info">
                  <span class="label">{{ item.title }}</span>
                  <span class="label">Контакт</span>
                </div>
                <div
                  class="form-item__filed-block-action"
                  role="button"
                  @click="removeField( index )"
                >
                  <span class="label">Удалить поле</span>
                </div>
              </div>
              <AppInput
                class="form-item__filed"
                v-if="item.type === 'text' || item.type === 'number'"
                :label="item.title"
                :type="item.type"
                :is-light="true"
                v-model="item.value"
              />
              <AppSelect
                v-if="isSelectType( item )"
                :taggable="item.model_type === 'multiselect'"
                :multiple="item.model_type === 'multiselect'"
                :options="item.options"
                label="title"
                track-by="title"
              />
              <AppCheckbox
                label="Сделать поле обязательным"
                v-model="item.isRequired"
              />
            </div>
            <div class="form-item__add-field">
              <AddItem
                :class="{ 'form-item__add-field-button--hidden': isShowSelect }"
                text="Добавить поле"
                @click="addField"
              />
              <div
                class="form-item__form-select"
                :class="{ 'form-item__form-select--active': isShowSelect }"
              >
                <AppSelect
                  :options="freeSelectOptions"
                  label="title"
                  placeholder="Поле"
                  @select="selectField"
                />
              </div>
            </div>
            <AddItem text="Добавить страницу формы" />
          </div>
        </div>
      </div>
    </div>
    <div class="form-item__preview">
      <ParticipantForm :user="user" />
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import AppButton from '@/components/UI/AppButton'
import AddItem from '@/components/UI/AddItem'
import AppInput from '@/components/UI/AppInput'
import AppCheckbox from '@/components/UI/AppCheckbox'
import ParticipantForm from '@/components/ParticipantForm'
import AppSelect from '@/components/UI/AppSelect'

import { defaultFields } from '@/const/defaultFields'
import { options } from '@/const/selectOptions'
import { fieldSettingsNav } from '@/const/FieldSettingsNav'

export default {
  name: 'FormItem',
  components: {
    AppButton,
    SideMenu,
    AddItem,
    AppInput,
    AppCheckbox,
    ParticipantForm,
    AppSelect

  },
  data() {
    return {
      user: {
        privacy: false,
        fieldList: defaultFields
      },
      isShowSelect: false,
      selectedField: {},
      selectOptions: [ ...options, ...defaultFields ],
      navigation: fieldSettingsNav
    }
  },
  computed: {
    freeSelectOptions() {
      return this.selectOptions.filter( selectOption => !this.user.fieldList.some( field => field.model === selectOption.model ) )
    },
    fieldList() {
      return defaultFields
    }
  },
  methods: {
    isSelectType( item ) {
      return item.type === 'select' || item.type === 'multiselect'
    },
    addField() {
      if( !this.isShowSelect ) {
        this.isShowSelect = true
        return
      }

      if( Object.keys( this.selectedField ).length ) {
        const field = {
          type: this.selectedField.type,
          model: this.selectedField.model,
          model_type: this.selectedField.model_type,
          title: this.selectedField.title,
          isRequired: false,
          value: this.isSelectType( this.selectedField ) ? this.selectedField.title : '',
          options: this.selectedField.options || [],
        }

        this.user.fieldList.push( field )
      }

      this.isShowSelect = false
      this.selectedField = {}
    },
    removeField( fieldIndex ) {
      this.user.fieldList = this.user.fieldList.filter( ( el, index ) => index !== fieldIndex )
    },
    selectField( item ) {
      this.selectedField = item
    },
    saveForm() {
      if( !this.user.fieldList.length ) {
        this.$toast.open( {
          message: 'Недостаточно полей для формы',
          position: 'bottom-left',
          type: 'error'
        } )
        return
      }

      localStorage.setItem( 'user', JSON.stringify( this.user ) )
      this.$toast.open( {
        message: 'Форма сохранена!',
        position: 'bottom-left'
      } )
    },
    openViewForm() {
      const fullURL = this.$router.resolve( { name: 'viewForm' } ).href
      window.open( fullURL, '_blank' )
    }
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  display: grid;
  grid-template-columns: 434px 503px auto;

  &__preview {
    background-color: var(--green);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__settings {
    background-color: var(--grey);
    overflow-y: auto;
  }

  &__settings-container {
    padding: 79px 36px 12px;
  }

  &__block {
    &:nth-child(2) {
      margin-bottom: 50px;
    }
  }

  &__title, &__block-title {
    margin-bottom: 30px;
  }

  &__filed-block-description {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 3px 10px 3px;
  }

  &__filed-block-description-info {
    span {
      &:last-child {
        margin-left: 16px;
      }
    }
  }

  &__filed-block-action {
    color: var(--green);

    span {
      opacity: 1;
    }
  }

  &__block-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__filed {
    margin-bottom: 10px;
  }

  &__add-field {
    position: relative;
  }

  &__add-field-button {

    &--hidden {
    }
  }

  &__form-select {
    display: none;
    margin-top: 30px;

    &--active {
      display: block;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
  }
}
</style>
