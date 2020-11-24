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
          <el-menu-item :index="`/guide/${componentName}Installation`">安装 Install</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>通用模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="`/guide/${componentName}Empty`">空数据 Empty</el-menu-item>
          <el-menu-item :index="`/guide/${componentName}HeaderNav`">头部导航 HeaderNav</el-menu-item>
          <el-menu-item :index="`/guide/${componentName}DatetimePicker`">时间选择器 DatetimePicker</el-menu-item>
          <el-menu-item :index="`/guide/${componentName}Table`">表格 Table</el-menu-item>
          <el-menu-item :index="`/guide/${componentName}InstitutionalFilter`">机构筛选器 Institutional</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { componentName } from "examples/constants";
const installationPath = `/guide/${componentName}Installation`
export default {
  data () {
    return {
      componentName,
      defaultActive: installationPath,
      mainMenuData: [
        {
          index: '1',
          label: '开发指南',
          children: [
            {
              index: installationPath,
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
        const path = val.fullPath
        this.defaultActive = path === '/' ? installationPath : path
      },
      immediate: true
    }
  }
}
</script>
