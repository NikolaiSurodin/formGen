<template>
  <div class="form-view">
    <ParticipantForm
      :user="user"
    />
  </div>
</template>

<script>
import ParticipantForm from '@/components/ParticipantForm'

export default {
  name: 'FormView',
  components: {
    ParticipantForm
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    const user = localStorage.getItem( 'user' )

    if( user ) {
      this.user = JSON.parse( user )
    }
  }
}
</script>

<style lang="scss" scoped>
.form-view {
  background-color: var(--green);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
