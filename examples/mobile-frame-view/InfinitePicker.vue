<template>
  <div class="container">
    <h3 class="infinite-mobile-h3">基础用法</h3>
    <el-row>
      <infinite-picker
      show-toolbar
      :columns="columns"
      ></infinite-picker>
    </el-row>

    <el-row>
      <infinite-picker
      show-toolbar
      :default-index="2"
      :columns="columns"
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
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      
    };
  },
};
</script>

<style>
</style>
