import Vue from 'vue'
import VueSpinner from './components/VueSpinner.vue'


Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><vue-spinner size="20px" css-class="test">Hello</vue-spinner></div>',
  components: { VueSpinner }
})
