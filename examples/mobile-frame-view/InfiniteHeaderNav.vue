<template>
  <div>

    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">基础用法</h2>
      <infinite-header-nav @goBack="parentCallBack"></infinite-header-nav>
    </el-row>

    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">showBackIcon 显示左侧ICON</h2>
      <infinite-header-nav :showBackIcon="showBackIcon" color="#fff">
        <div slot="centerItem">
          标题
        </div>
      </infinite-header-nav>
    </el-row>

    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">size自定义icon大小</h2>
      <infinite-header-nav size="30px"></infinite-header-nav>
    </el-row>

    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">color自定义icon颜色</h2>
      <infinite-header-nav color="lightblue"></infinite-header-nav>
    </el-row>

    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">slot自定义内容，可使用自定义图标</h2>
      <infinite-header-nav :useVantIcon="false">
        <div slot="leftItem">
          <img class="arrow-icon" :src="require('../../packages/theme-chalk/src/imgs/arrow.png')" alt="arrow-icon">
          <span>返回</span>
        </div>
        <div slot="centerItem">
          {{headerTitle}}
        </div>
        <div slot="rightItem">
          提交
        </div>
      </infinite-header-nav>
    </el-row>

    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">insertStyle自定义样式</h2>
      <infinite-header-nav
        :insertStyle="insertStyle">
        <div slot="leftItem">
          返回
        </div>
        <div slot="centerItem">
          标题
        </div>
        <div slot="rightItem">
          下载
        </div>
      </infinite-header-nav>
    </el-row>

  </div>
</template>
<script>
export default {
  methods: {
    parentCallBack () {
      console.log('parent get click');
    }
  },
  data () {
    return {
      headerTitle: '标题',
      showBackIcon: false,
      insertStyle: { background: '#fff', color: '#35b6e0', fontSize: '18px', paddingTop: '6px' }
    }
  }
}
</script>

<style>
  .arrow-icon {
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }
</style>
