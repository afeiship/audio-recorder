<template>
  <span :class="['mint-spinner-snake',cssClass]"></span>
</template>

<script>
export default {
  name: 'vue-spinner',
  props: {
    type: {
      type: String,
      default: 'vue-spinner'
    },
    cssClass:{
      type:String
    }
  }
};
</script>

<style lang="sass">
  @import "./style.scss";
</style>
