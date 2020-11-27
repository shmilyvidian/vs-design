<template>
  <transition
    name="fade"
    @after-leave='resetItem'
  >
    <div
      class="vs-institutional-filter"
      :style="wrappperStyle"
      v-show="showModel"
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
              v-model.trim="inputValue"
            >
          </div>
        </div>
        <!-- end of 搜索框 -->
        <!-- 筛选器内容 -->
        <div
          class="institutional-filter-content-wrapper"
          :class="{'pt0':showSearch}"
          @scroll="onScroll"
        >
          <div class="institutional-filter-content">
            <!-- 目前缺少唯一标识符 在后台返回数据中 中文是唯一标识符 不可用 -->
            <div
              class="institutional-filter-content-item"
              v-for="(item,index) in showContentList"
              :key="index"
              @click="onSelectItem(item)"
              :class="{'active':(selectedList[selectedIndex] && selectedList[selectedIndex].name) === item.name}"
            >
              {{item.name}}
            </div>
          </div>
        </div>
        <div
          class="tip"
          v-if="showTip"
        ></div>
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
  name: 'VsInstitutionalFilter',
  props: {
    // 机构树形结构
    columns: {
      type: Object,
      require: true,
      default: () => {
        return {}
      }
    },
    // 控制弹窗显示
    showModel: {
      type: Boolean,
      require: true,
      default: false
    },
    // 表头内容自定义
    headerMap: {
      type: Array,
      require: false,
      default: () => ['战区', '城市', '区域', '街道']
    },
    // 外框样式
    wrappperStyle: {
      type: Object,
      required: false,
      default: () => {
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
    prop: 'showModel',
    event: 'changeShowModle'
  },
  watch: {
    // 列表完整数据
    columns: {
      handler (val, oldVal) {
        // 缓存数据
        if (this.showContentList.length) {
          return
        }
        // 默认放入参数中
        if (val.children && val.children.length) {
          this.showContentList = val.children
          // 数据进来后设置参数到原始数据中
          this.originContentList[this.selectedIndex].children = val.children
          // 设置到默认头部
          this.privateHeaderMap[this.selectedIndex].children = val.children
        }
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
            // 设置原始数组数组
            this.$set(this.originContentList, index, {
              children: [],
            })
          });

          // 将第一个获取的子集存在到相应位置
          this.privateHeaderMap[this.selectedIndex].children = this.columns.children
          // 设置第一个子集到原始数组中
          this.originContentList[this.selectedIndex].children = this.columns.children
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
      privateHeaderMap: [{
        children: [],
        selectedName: '',
        name: ''
      }], // 重组头部
      inputValue: '', // 搜索框参数
      originContentList: [{
        children: [],
        selectedName: '',
        name: ''
      }], // 搜索之前数据 
      showTip: false, // 提示滚动条
      resetList: [], // 当前回写选中列表
      confirmHeaderList: [] // 当前回写头部信息
    }
  },
  mounted () {
    this.isScroll()
  },
  methods: {
    // 是否提示滚动icon
    isScroll () {
      const contentHeight = document.querySelector('.institutional-filter-content') && document.querySelector('.institutional-filter-content').offsetHeight
      const wrapperHeight = document.querySelector('.institutional-filter-content-wrapper') && document.querySelector('.institutional-filter-content-wrapper').offsetHeight
      if (contentHeight > wrapperHeight) {
        this.showTip = true
      } else {
        this.showTip = false
      }

    },
    // 监听滚动
    onScroll (event) {
      // 监听滚动到底部 取消显示
      const target = event.target || {}
      if (target.scrollHeight - target.clientHeight - target.scrollTop < 20) {
        this.showTip = false
      } else {
        this.showTip = true
      }
    },
    // 点击内容选中参数
    onSelectItem (item) {
      // 清除下标之后的选中参数 避免返回过多
      this.selectedList.splice(this.selectedIndex, this.selectedList.length)
      // 将点击参数放入对应位置
      this.$set(this.selectedList, this.selectedIndex, item)
      console.log(this.selectedList)
      // 设置选中值到header
      if (this.showNameToHeader) {
        this.privateHeaderMap[this.selectedIndex].selectedName = item.name
      }

      // 存在子集移动下标
      if (item.children && item.children.length) {
        this.inputValue = ''
        // 将子集存入到header中 方便点击回写
        this.privateHeaderMap[this.selectedIndex].children = this.originContentList[this.selectedIndex].children

        // 将下标+1
        this.selectedIndex += 1
        // 设置子集到内容区域中
        this.showContentList = item.children

        this.originContentList[this.selectedIndex].children = JSON.parse(JSON.stringify(item.children))

        // 切换数据后显示滚动提示
        this.$nextTick(() => {
          this.isScroll()

          document.querySelector('.institutional-filter-content') && (document.querySelector('.institutional-filter-content').scrollTop = 0)
        })
      }
    },
    // 点击头部选中参数
    changeHeader (item, index) {
      if (item.children.length) {
        console.log(this.selectedList)
        // 点击头部清除下标之后的选中参数 默认选中当前已选值
        this.selectedList.splice((index + 1), this.selectedList.length)
        // 重置输入值
        this.inputValue = ''
        // 显示相应数组
        this.showContentList = item.children
        // 设置到原始数组 方便回写和显示
        this.originContentList[this.selectedIndex].children = item.children
        // 移动下标
        this.selectedIndex = index
        // 将index之后的header参数清除
        this.privateHeaderMap.forEach((item, current) => {
          if (current > index) {
            item.selectedName = ''
          }
        })
        // 切换数据后显示滚动提示
        this.$nextTick(() => {
          this.isScroll()

          document.querySelector('.institutional-filter-content') && (document.querySelector('.institutional-filter-content').scrollTop = 0)
        })
      }
    },
    // 监听输入事件
    onInput (event) {
      console.log(11);

      const inputStr = event.target.value.trim()
      // 存在值暴露事件，正则匹配
      if (inputStr.length) {
        const testExp = new RegExp(inputStr, 'g')
        // 搜索当前原始数据
        const searchResult = this.originContentList[this.selectedIndex].children.filter(item => {
          return testExp.test(item.name)
        })
        this.showContentList = searchResult
      } else {
        this.showContentList = this.originContentList[this.selectedIndex].children
      }
      // 切换数据后显示滚动提示
      this.$nextTick(() => {
        this.isScroll()
      })
      this.$emit('onInput', event.target)
    },
    // 确认按钮
    onConfirm () {
      // 回写的时候使用点击确定的数组
      this.resetList = JSON.parse(JSON.stringify(this.selectedList))

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
    },
    // 回写已选中参数
    resetItem () {
      // 清空输入框
      this.inputValue = ''
      // 设置取值下标
      console.log(this.resetList)
      if (this.resetList.length) {

        let current = this.resetList.length

        // 将之前选中的参数还原到当前选中列表中
        this.selectedList = JSON.parse(JSON.stringify(this.resetList))

        let listIndex = current
        if (current > 1) {
          listIndex -= 2
          // 取出上级children当展示列表
          this.showContentList = this.resetList[listIndex] && this.resetList[listIndex].children
        } else if (current === 1) {
          // 如果只选了一级 将取出头部
          this.showContentList = this.privateHeaderMap[0].children
        }

        // 设置头部信息
        this.resetList.forEach((element, index) => {
          if (element.name !== '') {
            this.privateHeaderMap[index].selectedName = this.resetList[index].name
          }
        });

        console.log(this.privateHeaderMap)

        // 设置下标
        this.selectedIndex = current && current - 1
      } else {
        // 不存在回写值 将下标复位
        this.selectedIndex = 0
        this.showContentList = this.privateHeaderMap[0].children
      }
    }
  }
}
</script>
