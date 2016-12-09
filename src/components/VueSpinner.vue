<template>
  <button class="vue-spinner" v-on:click="_click()" :type="type">
    <i>ICON</i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'vue-spinner',
    props:{
      type:{
        type:String,
        default:'vue-spinner'
      }
    },
    methods:{
      _click:function(){
        alert('Hello YO VUE!');
      }
    }
  };
</script>

<style lang="scss">
  .vue-spinner{
    border:none;
    background: #999;
    padding:10px;
    font-size: 12px;
    color:#333;
    border-radius: 4px;
    i{
      color:#00f;
      font-size: 8px;
    }
  }
</style>
