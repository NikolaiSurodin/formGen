<template>
  <div class="default-input-wrapper">
    <div
      class="default-input"
      :class="{
        'default-input--active': isActiveInput,
        'default-input--light': isLight,
        'default-input--error': required
      }"
    >
      <label
        class="default-input__label h14"
        :class="{ 'default-input__label--active': isActiveInput }"
      >
        {{ label }}
      </label>
      <input
        ref="input"
        @focus="onFocus"
        @blur="onBlur"
        @input="updateValue"
        @keydown.enter="pushEnter"
        :id="id"
        :type="type"
        :autocomplete="autocomplete"
        :required="required"
        :value="value"
        :disabled="isDisabled"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppInput',
  props: {
    id: {
      type: String,
      default: 'Search'
    },
    label: {
      type: [ String, Object ],
      required: true
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    isLight: {
      type: Boolean,
      default: false
    },
    isPushEnter: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    isActiveInput() {
      return this.isFocused || this.value !== ''
    }
  },
  methods: {
    updateValue( event ) {
      this.$emit( 'input', event.target.value )
    },
    onFocus() {
      this.isFocused = true
    },
    onBlur() {
      this.isFocused = false
    },
    pushEnter( event ) {
      if( this.isPushEnter ) {
        this.$emit( 'pushEnterButton', event.target.value )
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.default-input-wrapper,
.default-input {
  width: 100%;
}

.default-input-wrapper {
  position: relative;

  &.clone-element .default-input__list {
    display: none;
  }
}

.default-input {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--grey);
  padding: 0 22px;
  z-index: 1;
  border-radius: 8px;
  transition: all 0.2s;

  &--search {
    padding: 0 24px;
  }

  &--active {
    background-color: var(--grey);
    border: 1px solid var(--grey);
  }

  &--light {
    background-color: var(--white);
    border: 1px solid var(--white);
  }

  &--error {
    border: 1px solid red !important;
  }

  input[type="text"],
  input[type="number"],
  input[type="password"],
  input[type="email"] {
    padding: 19px 0;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    box-shadow: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: var(--black);
  }

  &__label {
    position: absolute;
    left: 24px;
    pointer-events: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--black);
    transition: 0.2s;
    opacity: 0.5;

    &--active {
      transform: translateY(-22px);
      opacity: 0;
    }
  }
}

</style>
