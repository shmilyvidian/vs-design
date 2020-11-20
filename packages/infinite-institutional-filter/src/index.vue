<template>
  <transition name="fade">
    <div
      class="vs-institutional-filter"
      :style="wrappperStyle"
      v-show="showModle"
    >
      <!-- 遮罩层 -->
      <div
        class="vs-institutional-filter-overlay"
        @click="onClickOverlay"
      >
      </div>
      <!-- end of 遮罩层 -->
      <!-- 筛选器主体 -->
      <div class="vs-institutional-filter-main">
        <div class="institutional-filter-header">
          <!-- 筛选器头部 -->
          <div
            class="institutional-filter-header-item"
            v-for="(item,index) in privateHeaderMap"
            :key="index"
            :class="{'active':selectedIndex === index}"
            @click="changeHeader(item,index)"
          >
            {{(selectedIndex >= index) ? (item.selectedName.length ? item.selectedName:item.name) : ''}}
          </div>
          <!-- end of 筛选器头部 -->
        </div>
        <!-- 搜索框 -->
        <div
          class="institutional-filter-search"
          v-if="showSearch"
        >
          <div class="institutional-filter-search-wrapper">
            <div class="institutional-filter-search-icon"></div>
            <input
              type="text"
              class="institutional-filter-search-input"
              @input="onInput"
              v-model="inputValue"
            >
          </div>
        </div>
        <!-- end of 搜索框 -->
        <!-- 筛选器内容 -->
        <div
          class="institutional-filter-content"
          :class="{'pt0':showSearch}"
        >
          <div
            class="institutional-filter-content-item"
            v-for="(item,index) in showContentList"
            :key="index"
            @click="onSelectItem(item)"
            :class="{'active':(selectedList[selectedIndex] && selectedList[selectedIndex].code) === item.code}"
          >
            {{item.name}}
          </div>
        </div>
        <div class="tip"></div>
        <!-- end of 筛选器内容 -->
        <!-- 筛选器底部 -->
        <div class="institutional-filter-footer">
          <div
            class="institutional-filter-footer-btn institutional-filter-footer-cancel"
            @click="onCancel"
          >取消</div>
          <div
            class="institutional-filter-footer-btn
          institutional-filter-footer-confirm
          "
            @click="onConfirm"
          >确认</div>
        </div>
        <!-- end of 筛选器底部 -->
      </div>
      <!-- end of 筛选器主体 -->
    </div>
  </transition>
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
    },
    // 外框样式
    wrappperStyle: {
      type: Object,
      required: false,
      default: () =>{
        return {}
      }
    },
    // 是否将选中值显示在header
    showNameToHeader: {
      type: Boolean,
      required: false,
      default: true
    },
    // 是否显示搜索框
    showSearch: {
      type: Boolean,
      required: false,
      default: true
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
  computed: {
    privateWrappperStyle () {
      return {
        ...this.wrappperStyle
      }
    }
  },
  watch: {
    // 列表完整数据
    columns: {
      handler (val, oldVal) {
        // console.log(val)
        // 默认放入参数中
        this.showContentList = val.children
        this.originContentList = val.children

      },
      immediate: true // true 深度监听
    },
    // 头部内容监听
    headerMap: {
      handler (val, oldVal) {
        // 整理成内部使用数据结构
        if (val && val.length) {
          val.forEach((element, index) => {
            // 将header构建成可观察对象
            this.$set(this.privateHeaderMap, index, {
              children: [],
              selectedName: '',
              name: element
            })
          });

          // 将第一个获取的子集存在到相应位置
          this.privateHeaderMap[this.selectedIndex].children = this.columns.children
          // console.log(this.privateHeaderMap)
        }
      },
      immediate: true // true 深度监听
    }
  },
  data () {
    return {
      showContentList: [], // 当前显示内容
      selectedList: [], // 已选内容
      selectedIndex: 0, // 当前选中层级
      privateHeaderMap: [], // 重组头部
      inputValue: '', // 搜索框参数
      originContentList: [] // 搜索之前数据 
    }
  },
  methods: {
    // 点击内容选中参数
    onSelectItem (item) {
      // console.log(item)
      // 将点击参数放入对应位置
      this.$set(this.selectedList, this.selectedIndex, item)

      // 设置选中值到header
      if (this.showNameToHeader) {
        this.privateHeaderMap[this.selectedIndex].selectedName = item.name
      }

      // 存在子集移动下标
      if (item.children && item.children.length) {
        this.inputValue = ''
        // 将子集存入到header中 方便点击回写
        this.privateHeaderMap[this.selectedIndex].children = this.originContentList
        // 将下标+1
        this.selectedIndex += 1
        // 设置子集到内容区域中
        this.showContentList = item.children
        this.originContentList = item.children
      }
    },
    // 点击头部选中参数
    changeHeader (item, index) {
      if (item.children.length) {
        this.inputValue = ''
        this.showContentList = item.children
        this.originContentList = item.children
        this.selectedIndex = index
      }
    },
    // 监听输入事件
    onInput (event) {
      const inputStr = event.target.value
      // console.log(this.showContentList)
      // 存在值暴露事件，正则匹配
      if (inputStr.length) {
        const testExp = new RegExp(inputStr, 'g')
        const searchResult = this.privateHeaderMap[this.selectedIndex].children.filter(item => {
          return testExp.test(item.name)
        })
        this.showContentList = searchResult
      } else {
        this.showContentList = this.privateHeaderMap[this.selectedIndex].children
      }
      this.$emit('onInput', event.target)
    },
    // 确认按钮
    onConfirm () {
      this.$emit('onConfirm', this.selectedList)
      this.$emit('changeShowModle', false)
    },
    // 取消按钮
    onCancel () {
      this.$emit('onCancel')
      this.$emit('changeShowModle', false)
    },
    // 点击蒙层隐藏
    onClickOverlay () {
      this.$emit('onClickOverlay')
      this.$emit('changeShowModle', false)
    }
  }
}
</script>
