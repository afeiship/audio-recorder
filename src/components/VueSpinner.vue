<template>
  <span class="mint-spinner-snake"></span>
</template>

<script>
export default {
  name: 'vue-spinner',
  props: {
    type: {
      type: String,
      default: 'vue-spinner'
    }
  },
  methods: {
    _click: function() {
      alert('Hello YO VUE!');
    }
  }
};
</script>

<style lang="sass">
  @import "./style.scss";
</style>
