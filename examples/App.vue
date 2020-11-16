<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header v-if="isChildIframe" height="40">
        <header-model></header-model>
      </el-header>
      <el-container>
        <el-aside v-if="isChildIframe" width="250px">
          <menu-model></menu-model>
        </el-aside>
        <el-main :class="isChildIframe ? 'el-main-left' : 'el-main-right'">
          <infinite-header-nav v-if="!isChildIframe" class="header-nav" :insertStyle="insertStyle">
            <div slot="centerItem">
              {{ iframeTitle}}
            </div>
          </infinite-header-nav>
          <router-view></router-view>
        </el-main>
        <div v-if="isChildIframe" :class="{'fixed-right': true, 'is-mobile': !isPC}">
          <iframe :style="simulatorStyle" :src="iframeSrc" name="mobileFrame" id="frame_1"></iframe>
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// "build:lib": "node build/build-lib.js && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk && cp-cli lib/theme-chalk/lib/index.css lib/infinite-ui.css",
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
      insertStyle: {
        position: 'fixed', top: 0, zIndex: 999
      }
    }
  },
  watch: {
    $route (to, from) {
      if (location.hash.includes('guide')) {
        this.iframeSrc = `/#/mobile/${to.name}`
      }
    }
  },
  methods: {
    
  },
  computed: {
    iframeTitle () {
      const routeArr = this.$route.path.split('/')
      return routeArr[routeArr.length - 1]
    },
    simulatorStyle () {
      const height = Math.min(640, window.innerHeight - 90)
      let obj = {}
      if (!this.isPC) {
        obj.width = '100%'
        obj.height = document.documentElement.clientHeight + 'px'
      }
      return {
        display: 'block',
        height: height + 'px',
        ...obj
      }
    },
    isPC () {  
      const userAgentInfo = navigator.userAgent
      const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'] 
      let flag = true  
      for (var v = 0; v < Agents.length; v++) {  
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break }  
      }  
      return flag
    }
  },
  mounted () {
    const route = this.$route
    this.isChildIframe = route.path.includes('guide') || route.path === '/'
    if (this.isChildIframe) {
      this.iframeSrc = `/#/mobile/${route.name}`
    } else {
      if (this.isPC) {
        document.documentElement.className = 'is-right-mobile'
      } else {
        // 设置iframe跟节点class
        document.documentElement.className = 'is-mobile'
      }
    }
  }
}
</script>
<style lang="scss" >
/* 引入代码高亮样式 */
@import "~highlight.js/styles/color-brewer.css";
.el-aside {
  height: calc(100vh - 60px);
}

.el-main {
  &.el-main-left {
    height: calc(100vh - 60px);
    width: calc(100vh - 300px);
    padding: 20px;
    margin-right: 370px;
  }

  &.el-main-right {
    padding: 0;
    padding-top: 30px;
  }

  .content {
    table {
      width: 100%;
      margin-top: 12px;
      color: #34495e;
      font-size: 14px;
      line-height: 1.5;
      border-collapse: collapse;

      th {
        padding: 8px 10px;
        font-weight: 600;
        text-align: left;

        &:first-child {
          padding-left: 0;
        }
      }

      td {
        padding: 8px;
        border-top: 1px solid #f1f4f8;

        &:first-child {
          padding-left: 0;
        }
      }

      em {
        color: #4fc08d;
        font-size: 14px;
        font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
        font-style: normal;
        -webkit-font-smoothing: auto;
      }
    }
  }
}

.fixed-right {
  align-self: flex-start;
  /* height: 600px; */
  position: fixed;
  top: 40px;
  right: 30px;
  margin: 0 20px;
  overflow: hidden;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: #bdc0c5 0 4px 12px;

  &.is-mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
}

.hljs {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  margin: 5px 0;
}

table {
  td, th {
    padding: 6px;
  }
}
</style>
