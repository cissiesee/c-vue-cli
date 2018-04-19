<template>
  <section class="app-main">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route'(to, from) {
      this.transitionName = window.history.isBack ? 'slide-right' : 'slide-left'
      window.history.isBack = false
    }
  }
}
</script>
<style lang="scss">
  .app-main {
    top: 0.88rem;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
