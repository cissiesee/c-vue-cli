<template>
  <div class="app-wrapper">
    <!-- <sidebar class="sidebar-container"></sidebar> -->
    <div class="main-container">
      <page-header></page-header>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, PageHeader } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    PageHeader,
    AppMain
  },
  computed: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
