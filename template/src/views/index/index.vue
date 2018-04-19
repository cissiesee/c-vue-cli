<template>
  <div id="index">
    <h3>index</h3>
    <p>app.state.demo: {{demo}}</p>
    <router-link to="/module1">to module1</router-link>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  mounted() {
    this.actionDemo().then((res) => {
      console.log(res)
    })
  },
  computed: {
    ...mapGetters([
      'demo'
    ])
  },
  methods: {
    ...mapActions('app', [
      'actionDemo'
    ])
  }
}
</script>
<style scoped lang="scss">
</style>