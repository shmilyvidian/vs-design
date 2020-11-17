<template>
  <div>

    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">基础用法</h2>
      <infinite-header-nav></infinite-header-nav>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">size自定义icon大小</h2>

      <infinite-header-nav size="30px"></infinite-header-nav>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">color自定义icon颜色</h2>
      <infinite-header-nav color="#fff"></infinite-header-nav>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">slot自定义内容</h2>

      <infinite-header-nav>
        <div slot="leftItem">
          返回
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
          左文字
        </div>
        <div slot="centerItem">
          中间文字
        </div>
        <div slot="rightItem">
          右文字
        </div>
      </infinite-header-nav>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      headerTitle: '标题',
      insertStyle: { background: '#fff', color: '#35b6e0', fontSize: '18px', paddingTop: '6px'}
    };
  }
};
</script>

<style></style>
