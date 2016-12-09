import Vue from 'vue'
import VueSpinner from './components/Spinner.vue'

Vue.component('mt-button', VueSpinner)

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><mt-button>Hello</mt-button></div>',
  components: { VueSpinner }
})
