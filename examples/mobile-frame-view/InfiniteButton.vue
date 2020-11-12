<template>
  <div>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">基础用法</h2>
        <infinite-button>默认按钮</infinite-button>
        <infinite-button type="primary">主要按钮</infinite-button>
        <infinite-button type="success">成功按钮</infinite-button>
        <infinite-button type="info">信息按钮</infinite-button>
        <infinite-button type="warning">警告按钮</infinite-button>
        <infinite-button type="danger">危险按钮</infinite-button>
    </el-row>
  <el-row class="infinite-doc-demo-block-row">
      <infinite-button plain>朴素按钮</infinite-button>
        <infinite-button type="primary" plain>主要按钮</infinite-button>
        <infinite-button type="success" plain>成功按钮</infinite-button>
        <infinite-button type="info" plain>信息按钮</infinite-button>
        <infinite-button type="warning" plain>警告按钮</infinite-button>
        <infinite-button type="danger" plain>危险按钮</infinite-button>
    </el-row>
     <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">禁用状态</h2>
        <infinite-button>默认按钮</infinite-button>
        <infinite-button type="primary" disabled>主要按钮</infinite-button>
        <infinite-button type="success" disabled>成功按钮</infinite-button>
        <infinite-button type="info" disabled>信息按钮</infinite-button>
        <infinite-button type="warning" disabled>警告按钮</infinite-button>
        <infinite-button type="danger" disabled>危险按钮</infinite-button>
    </el-row>
    <el-row>
        <infinite-button plain disabled>朴素按钮</infinite-button>
        <infinite-button type="primary" plain disabled>主要按钮</infinite-button>
        <infinite-button type="success" plain disabled>成功按钮</infinite-button>
        <infinite-button type="info" plain disabled>信息按钮</infinite-button>
        <infinite-button type="warning" plain disabled>警告按钮</infinite-button>
        <infinite-button type="danger" plain disabled>危险按钮</infinite-button>
    </el-row>
      <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">按钮形状</h2>
        <infinite-button type="primary" square>方形按钮</infinite-button>
        <infinite-button type="info" round>圆形按钮</infinite-button>
    </el-row>
     <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">图标按钮</h2>
        <infinite-button type="primary" icon="plus"></infinite-button>
        <infinite-button type="primary" icon="plus">按钮</infinite-button>
        <infinite-button icon="https://img.yzcdn.cn/vant/user-active.png">按钮</infinite-button>
    </el-row>
     <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">按钮尺寸</h2>
        <infinite-button size="large">大号按钮</infinite-button>
        <infinite-button size="normal">普通按钮</infinite-button>
        <infinite-button size="small">小型按钮</infinite-button>
        <infinite-button size="mini">迷你按钮</infinite-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    console.log('button mounted');
  }
}
</script>
<style scoped>
  .infinite-button {
    margin: 2px;
    padding: 5px;
  }
</style>