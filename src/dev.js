import Vue from 'vue'
import VueSpinner from './components/VueSpinner.vue'

Vue.component(VueSpinner.name, VueSpinner)

console.log(VueSpinner);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><vue-spinner css-class="test">Hello</vue-spinner></div>',
  components: { VueSpinner }
})
