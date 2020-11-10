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
        <el-main :style="{ padding: isChildIframe ? '20px' : 0 }">
          <infinite-header-nav v-if="!$route.path.includes('guide')" class="header-nav">
            <div slot="centerItem">
              {{ iframeTitle}}
            </div>
          </infinite-header-nav>
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
      iframeSrc: '',
      routeArr: this.$route.path.split('/'),
    };
  },
  watch: {
    $route(to, from) {
      if (location.hash.includes("guide")) {
        this.iframeSrc = `/#/mobile/${to.name}`;
      }
    }
  },
  methods: {},
  computed: {
    iframeTitle() {
      const routeArr = this.$route.path.split('/');
      return routeArr[routeArr.length - 1];
    },
    simulatorStyle () {
      const height = Math.min(640, window.innerHeight - 90)
      return {
        height: height + 'px'
      }
    }
  },
  mounted() {
    const route = this.$route;
    this.isChildIframe = route.path.includes("guide");
    if(this.isChildIframe) {
      this.iframeSrc = `/#/mobile/${route.name}`;
    }
  },
};
</script>
<style>
/* 引入代码高亮样式 */
@import "~highlight.js/styles/color-brewer.css";
.el-main {
  height: calc(100vh - 60px);
  width: calc(100vh - 300px);
}

.fixed-right {
  align-self: flex-start;
  height: 600px;
  margin: 20px;
  overflow: hidden;
  top: 90px;
  right: 30px;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: #bdc0c5 0 4px 12px;
}
</style>
