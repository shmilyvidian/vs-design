<template>
  <div class="container">
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">基础用法</h2>
      <div class="infinite-doc-demo-block-table ">
      </div>
      <van-cell is-link title="生成普通loading" @click="showLoading('base')" />
      <van-cell is-link title="生成spinncer类型loading" @click="showLoading('spinner')" />
      <van-cell is-link title="自定义loading颜色" @click="showLoading('color')" />
      <van-cell is-link title="自定义loading大小" @click="showLoading('size')" />
      <van-cell is-link title="自定义loading文案内容" @click="showLoading('text')" />
    </el-row>
    <div v-if="showLoadingWrapper" class="loading-wrapper">
      <infinite-loading v-if="baseLoading"></infinite-loading>
      <infinite-loading v-if="spinnerLoading" type="spinner"></infinite-loading>
      <infinite-loading v-if="colorLoading" type="spinner" color="orange"></infinite-loading>
      <infinite-loading v-if="sizeLoading" type="spinner" color="orange" size="60"></infinite-loading>
      <infinite-loading v-if="textLoading" type="spinner" color="orange" size="60" loadingText="测试文案"></infinite-loading>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showLoading(type) {
      const typeArr = ['base', 'spinner', 'color', 'size', 'text']
      typeArr.map(item => {
        if(item !== type) {
          this[`${item}Loading`] = false
        }
      })
      this.showLoadingWrapper = true
      this[`${type}Loading`] = true
      setTimeout(() => {
        this[`${type}Loading`] = false
        this.showLoadingWrapper = false
      }, 2000);
    }
  },
  data() {
    return {
      showLoadingWrapper: false,
      baseLoading: false,
      spinnerLoading: false,
      colorLoading: false,
      sizeLoading: false,
      textLoading: false,
    };
  },
};
</script>

<style>
  .container {
    position: relative;
  }
  .loading-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 300px;
    bottom: 0;
    margin: auto;
  }
</style>
