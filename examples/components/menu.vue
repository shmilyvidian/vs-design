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
          <el-menu-item index="/guide/loading">Loading</el-menu-item>
          <el-menu-item index="/guide/empty">Empty</el-menu-item>
          <el-menu-item index="/guide/datetimepicker">DatetimePicker</el-menu-item>
          <el-menu-item index="/guide/InfinitePullRefresh">InfinitePullRefresh</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
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
