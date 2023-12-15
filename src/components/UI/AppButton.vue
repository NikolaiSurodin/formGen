<template>
  <button
    type="button"
    tabindex="0"
    class="default-button"
    :class="[
     theme && theme !== 'primary' ? `default-button--${ theme }` : ''
    ]"
    @click="$emit('click')"
    :disabled="isDisabled"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>

.default-button {
  color: var(--white);
  border: none;
  outline: none;
  padding: 1rem 2rem;
  display: flex;
  border-radius: 12px;
  position: relative;
  background-color: var(--green);
  transition: 0.2s;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  max-width: 160px;

  &[disabled] {
    background-color: var(--grey);
    cursor: default;
    color: var(--black);
  }
  &--outline {
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid var(--green);
    color: var(--green);
  }
  &--secondary {
    background-color: transparent;
    border-radius: 10px;
    color: var(--green);
  }
}
</style>
