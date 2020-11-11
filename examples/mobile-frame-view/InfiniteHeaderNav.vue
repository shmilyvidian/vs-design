<template>
  <div>
    <h3 class="infinite-mobile-h3">基础用法</h3>
    <el-row>
      <infinite-header-nav></infinite-header-nav>
    </el-row>
    <h3 class="infinite-mobile-h3">size自定义icon大小</h3>
    <el-row>
      <infinite-header-nav size="30"></infinite-header-nav>
    </el-row>
    <h3 class="infinite-mobile-h3">color自定义icon颜色</h3>
    <el-row>
      <infinite-header-nav color="#82bdfb"></infinite-header-nav>
    </el-row>
    <h3 class="infinite-mobile-h3">slot自定义内容</h3>
    <el-row>
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
    <h3 class="infinite-mobile-h3">slot自定义内容</h3>
    <el-row>
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
    <h3 class="infinite-mobile-h3">insertStyle自定义样式</h3>
    <el-row>
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
      insertStyle: { background: '#fff', color: '#35b6e0', fontSize: '28px', paddingTop: '20px'}
    };
  }
};
</script>

<style></style>
