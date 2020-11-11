<template>
  <div class="container">
    <h3 class="infinite-mobile-h3">基础用法</h3>
    <infinite-button @click="onClick">默认按钮</infinite-button>
    <infinite-popup
      v-model='show'
      @onClickOverlay="onClickOverlay"
    ></infinite-popup>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.show = true
    },
    onClickOverlay(){
      console.log('onClickOverlay==');
      this.show = false
    }
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>
