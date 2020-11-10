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
          <el-menu-item index="/guide/installation">安装</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>通用模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/button">Button</el-menu-item>
          <el-menu-item index="/guide/InfiniteLoading">Loading</el-menu-item>
          <el-menu-item index="/guide/InfiniteEmpty">Empty</el-menu-item>
          <el-menu-item index="/guide/InfiniteHeaderNav">HeaderNav</el-menu-item>
          <el-menu-item index="/guide/datetimepicker">DatetimePicker</el-menu-item>
          <el-menu-item index="/guide/InfinitePullRefresh">下拉刷新 PullRefresh</el-menu-item>
          <el-menu-item index="/guide/InfinitePopup">弹出层 Popup</el-menu-item>
          <el-menu-item index="/guide/InfinitePicker">选择器 Picker</el-menu-item>
          <el-menu-item index="/guide/InfiniteToast">Toast</el-menu-item>
          <el-menu-item index="/guide/InfiniteTable">Table</el-menu-item>
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
