import Vue from 'vue'

import '@/styles/reset.css'// A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import '@/utils/responsive'
import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon

// import mock from './mock' // simulation data
import * as filters from './filters' // global filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

// if (process.env.NODE_ENV === 'development') {
//   mock()
// }

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
