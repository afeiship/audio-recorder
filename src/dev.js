import Vue from 'vue'
import VueSpinner from './components/VueSpinner.vue'


Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<div>
  <vue-spinner size="20px" width="2px" color="#f00" css-class="test1" />
  <vue-spinner size="30px" width="3px" color="#f60" css-class="test2" />
  <vue-spinner size="50px" width="4px" color="#00f" css-class="test3" />
  </div>`,
  components: { VueSpinner }
})
