import Vue from 'vue';
import Index from './index.vue';
Index.install=function() {
  Vue.compoent(Index.name,Index);
};
module.exports = Index;
