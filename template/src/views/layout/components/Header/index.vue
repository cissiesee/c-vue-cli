<template>
  <div id="page-header">
    <h3><svg-icon icon-class="table"></svg-icon>{{title}}</h3>
  </div>
</template>
<script>
export default {
  name: 'pageHeader',
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    transition: all 0.5s linear;
  }
</style>
