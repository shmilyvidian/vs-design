<template>
  <div class="container">
    <h3 class="infinite-mobile-h3">基础用法</h3>
    <el-row>
      <infinite-picker
      ></infinite-picker>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.show = true
    },
    onClickOverlay(){
      this.show = false
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
