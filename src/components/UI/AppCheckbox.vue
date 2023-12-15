<template>
  <div class="default-checkbox">
    <label class="default-checkbox__custom-checkbox">
      <input
        type="checkbox"
        class="default-checkbox__input"
        :id="id"
        :checked="isChecked"
        @change="handleChange"
      >
      <span class="default-checkbox__label">{{ label }}</span>
    </label>
  </div>
</template>

<script>

export default {
  name: 'DefaultCheckboxNew',
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
    },
    value: {
      type: Boolean,
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.value
      },
      set( newValue ) {
        this.$emit( 'input', newValue )
      },
    },
  },
  methods: {
    handleChange() {
      this.isChecked = !this.isChecked
    },
  },
}
</script>

<style scoped lang="scss">

.default-checkbox {

  &__custom-checkbox {
    cursor: pointer;
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:before {
      content: '';
      display: inline-block;
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid var(--black);
      opacity: 0.5;
      border-radius: 4px;
      margin-right: 8px;
      background-repeat: no-repeat;
      background-position: center center;
      background-color: var(--grey);
      transition: all 0.2s;
    }
  }

  &__input:not(:disabled) + &__label:hover::before {
    cursor: pointer;
  }

  &__input:not(:disabled):active + &__label::before {
    background-color: var(--green);
  }

  &__input:focus:not(:checked) + &__label {
    transition: all 0.4s;
  }

  &__input:checked + &__label::before {
    background-color: var(--green);
    background-image: url('../.././assets/icons/check.svg');
  }

  &__input:checked + &__label {
    color: var(--black);
    transition: all 0.4s;
  }
}

</style>
