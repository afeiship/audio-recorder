<template>
  <span :style="{
    width:size,
    height:size,
    'border-width':width,
    'border-top-color': color,
    'border-left-color': color,
    'border-bottom-color': color,
  }" :class="['mint-spinner-snake',cssClass]"></span>
</template>

<script>
export default {
  props: {
    width:{
      type:String,
      default:'4px'
    },
    size:{
      type:String,
      default:'28px'
    },
    color:{
      type:String,
      default:'#26a2ff'
    },
    cssClass:{
      type:String
    }
  }
};
</script>

<style lang="sass">
  @import "./style.scss"
</style>
