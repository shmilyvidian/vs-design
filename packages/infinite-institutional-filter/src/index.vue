<template>
  <div
    class="infinite-institutional-filter"
    v-show="showModle"
  >
    <div class="institutional-filter-header">
      <!-- 筛选器头部 -->
      <div
        class="institutional-filter-header-item"
        v-for="(item,index) in headerMap"
        :key="index"
        :class="{'active':selectedIndex === index}"
      >
        {{(selectedIndex >= index) ? item : ''}}
      </div>
      <!-- end of 筛选器头部 -->
    </div>
    <!-- 筛选器内容 -->
    <div class="institutional-filter-content">
      <div
        class="institutional-filter-content-item"
        v-for="(item,index) in contentList"
        :key="index"
        @click="onSelectItem(item)"
        :class="{'active':(selectedList[selectedIndex] && selectedList[selectedIndex].code) === item.code}"
      >
        {{item.name}}
      </div>
    </div>
    <!-- end of 筛选器内容 -->
    <!-- 筛选器底部 -->
    <div class="institutional-filter-footer">
      <div
        class="institutional-filter-footer-btn"
        @click="onCancel"
      >取消</div>
      <div
        class="institutional-filter-footer-btn"
        @click="onConfirm"
      >确认</div>
    </div>
    <!-- end of 筛选器底部 -->
  </div>
</template>

<script>
export default {
  name: 'InfiniteInstitutionalFilter',
  props: {
    // 机构树形结构
    columns: {
      type: Object,
      require: true,
      default: () => []
    },
    // 控制弹窗显示
    showModle: {
      type: Boolean,
      require: true,
      default: false
    },
    // 表头内容自定义
    headerMap: {
      type: Array,
      require: false,
      default: () => ['全行', '战区', '城市', '公司']
    }
    // 当前选中层级 最高4层 待定
    // selectedIndex: {
    //   type: Number,
    //   require: false,
    //   default: 0
    // }
  },
  model: {
    prop: 'showModle',
    event: 'changeShowModle'
  },
  watch: {
    columns: {
      handler (val, oldVal) {
        console.log(val)
        // 默认放入参数中
        this.contentList = val.children
      },
      immediate: true // true 深度监听
    }
  },
  data () {
    return {
      contentList: [], // 当前显示内容
      selectedList: [], // 已选内容
      selectedIndex: 0
    }
  },
  mounted () {
    console.log(123)
  },
  methods: {
    // 点击选中参数
    onSelectItem (item) {
      console.log(item)
      // 将点击参数放入对应位置
      this.$set(this.selectedList,this.selectedIndex,item)

      // 存在子集移动下标
      if (item.children && item.children.length) {
        this.selectedIndex += 1
        this.contentList = item.children
      }
    },
    // 确认按钮
    onConfirm () {
      this.$emit('onConfirm', this.selectedList)
    },
    // 取消按钮
    onCancel () {
      this.$emit('changeShowModle', false)
      this.$emit('onCancel')
    }
  }
}
</script>
