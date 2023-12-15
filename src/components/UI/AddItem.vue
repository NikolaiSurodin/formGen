<template>
  <div
    class="add-item"
    @click="$emit('click')"
  >
    <div class="add-item__inner">
      <span>{{ text }}</span>
      <span><img src="../../assets/icons/plus.svg" alt="plus"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  props:{
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.add-item {
  border-radius: 10px;
  border: 1px dashed var(--green);
  padding: 20px 30px 20px 30px;
  height: 71px;
  width: 100%;
  cursor: pointer;
  color: var(--green);

  &__inner {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
