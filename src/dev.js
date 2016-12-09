import Vue from 'vue'
import VueSpinner from './components/VueSpinner.vue'


Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><vue-spinner size="20px" width="2px" color="#f00" css-class="test" /></div>',
  components: { VueSpinner }
})
