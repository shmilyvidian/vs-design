<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header v-if="isChildIframe" height="40">
        <header-model></header-model>
      </el-header>
      <el-container>
        <el-aside v-if="isChildIframe" width="200px">
          <menu-model></menu-model>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
        <div v-if="isChildIframe" class="fixed-right">
          <iframe :style="simulatorStyle" :src="iframeSrc" name="mobileFrame" id="frame_1"></iframe>
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
    return {
      isChildIframe: true,
      iframeSrc: '/#/mobile/index'
    }
  },
  watch: {
    $route (to, from) {
      console.log('route change', to, from)
      console.log('parent window', window)
      if (location.hash.includes('guide')) {
        this.iframeSrc = `/#/guide/${to.name.toLowerCase()}`
      }
    }
  },
  methods: {},
  computed: {
    simulatorStyle () {
      const height = Math.min(640, window.innerHeight - 90)
      return {
        height: height + 'px'
      }
    }
  },
  mounted () {
    this.isChildIframe = location.hash.includes('guide')
  }
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
  min-height: 600px;
  margin: 20px;
  overflow: hidden;
}
</style>
