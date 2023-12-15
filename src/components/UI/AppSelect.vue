<template>
  <div>
    <multiselect
      ref="multiselect"
      v-model="value"
      :options="options"
      :label="label"
      :multiple="multiple"
      :allow-empty="false"
      :track-by="trackBy"
      deselectLabel=""
      selectedLabel=""
      selectGroupLabel="Нажмите enter для выбора"
      tagPlaceholder=""
      selectLabel=""
      :placeholder="placeholder"
      @select="select"
      @tag="addTag"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  data() {
    return {
      value: null,
    }
  },
  props: {
    options: {
      type: Array,
      default: () => ( [] )
    },
    label: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    trackBy: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  components: {
    Multiselect
  },
  methods: {
    select( item ) {
      this.$emit( 'select', item )
    },
    addTag( item ) {
      this.$emit( 'tag', item )
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
