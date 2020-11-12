<template lang="html">
  <div class="menu-model">
    <el-menu
      default-active="1"
      :unique-opened="true"
      :default-openeds="['1', '2', '3']"
      :default-active="defaultActive"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/installation">安装 Install</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>通用模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/InfiniteButton">按钮 Button</el-menu-item>
          <el-menu-item index="/guide/InfiniteLoading">加载 Loading</el-menu-item>
          <el-menu-item index="/guide/InfiniteEmpty">空数据 Empty</el-menu-item>
          <el-menu-item index="/guide/InfiniteHeaderNav">头部导航 HeaderNav</el-menu-item>
          <el-menu-item index="/guide/datetimepicker">时间选择器 DatetimePicker</el-menu-item>
          <el-menu-item index="/guide/InfinitePullRefresh">下拉刷新 PullRefresh</el-menu-item>
          <el-menu-item index="/guide/InfinitePopup">弹出层 Popup</el-menu-item>
          <el-menu-item index="/guide/InfinitePicker">选择器 Picker</el-menu-item>
          <el-menu-item index="/guide/InfiniteToast">提示 Toast</el-menu-item>
          <el-menu-item index="/guide/InfiniteTable">表格 Table</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '/guide/installation',
      mainMenuData: [
        {
          index: '1',
          label: '开发指南',
          children: [
            {
              index: '/guide/installation',
              label: '安装'
            }
          ]
        },
        {
          index: '2',
          label: '通用模块'
        }
      ]
    }
  },
  computed: {
    menuList () {
      const componentlist = []
      this.$router.options.routes.forEach((route) => {
        if (route.meta && route.meta.type === 'component') {
          componentlist.push({
            index: route.path,
            label: route.name
          })
        }
      })
      this.$set(this.mainMenuData[1], 'children', componentlist)
      return this.mainMenuData
    }
  },
  watch: {
    '$route': {
      handler (val) {
        console.log(val)
        const path = val.fullPath
        this.defaultActive = path === '/' ? '/guide/installation' : path
      },
      immediate: true
    }
  }
}
</script>
