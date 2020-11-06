<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header height="40">
        <header-model></header-model>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <menu-model></menu-model>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
        <div class="fixed-right">
          <iframe
            style="height: 640px;"
            src="http://www.runoob.com"
            id="frame_1"
          ></iframe>
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import HeaderModel from './components/header'
import MenuModel from './components/menu'
export default {
  components: {
    HeaderModel,
    MenuModel
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style>
/* 引入代码高亮样式 */
@import "~highlight.js/styles/color-brewer.css";
.el-main {
  height: calc(100vh - 60px);
  width: calc(100vh - 300px);
}

.fixed-right {
  height: 600px;
  margin: 20px;
  overflow: hidden;
}
</style>
