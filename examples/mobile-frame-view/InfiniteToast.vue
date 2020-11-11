<template>
  <div>
    <el-row class="infinite-doc-demo-block-row" v-for="(item, index) of toastArr" :key="index">
      <h2 class="infinite-doc-demo-block-title">{{ item.title }}</h2>
      <div class="infinite-doc-demo-block-toast ">
        <van-cell 
          is-link 
          v-for="(cellItem, cellIndex) of item.cellArr" 
          :title="cellItem.title"  
          :key="cellIndex" 
          @click="fnClassification(arguments, cellItem.clickMethod)" />
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      toastArr: [
        {
          title: '基础用法',
          cellArr: [
            {
              title: '文字提示',
              clickMethod: 'infiniteToastText'
            },
            {
              title: '加载提示',
              clickMethod: 'infiniteToastLoading'
            },
            {
              title: '成功提示',
              clickMethod: 'infiniteToastSuccess'
            },
            {
              title: '失败提示',
              clickMethod: 'infiniteToastFail'
            }
          ]
        },
        {
          title: '自定义图标',
          cellArr: [
            {
              title: '自定义图标提示',
              clickMethod: 'infiniteToastIcon'
            },
            {
              title: '自定义图片提示',
              clickMethod: 'infiniteToastImg'
            },
            {
              title: '自定义加载图标提示',
              clickMethod: 'infiniteToastTypeIcon'
            }
          ]
        },
        {
          title: '自定义位置',
          cellArr: [
            {
              title: '自定义顶部提示',
              clickMethod: 'infiniteToastPositionTop'
            },
            {
              title: '自定义底部提示',
              clickMethod: 'infiniteToastPositionBottom'
            }
          ]
        },
        {
          title: '动态更新提示',
          cellArr: [
            {
              title: '动态更新提示',
              clickMethod: 'infiniteToastPromise'
            }
          ]
        }
      ]
    }
  },
  methods: {
    fnClassification (argumentsArr = [], method) {
      if (!this[method]) {
        return
      }
      this[method](...argumentsArr)
    },
    infiniteToastText () {
      this.$infiniteToast('提示内容')
    },
    infiniteToastLoading () {
      this.$infiniteToast.loading({
        message: '加载中...',
        forbidClick: true
      })
    },
    infiniteToastSuccess () {
      this.$infiniteToast.success('成功文案')
    },
    infiniteToastFail () {
      this.$infiniteToast.fail('失败文案')
    },
    infiniteToastIcon () {
      this.$infiniteToast({
        message: '自定义图标',
        icon: 'like-o'
      })
    },
    infiniteToastImg () {
      this.$infiniteToast({
        message: '自定义图片',
        icon: 'https://img.yzcdn.cn/vant/logo.png'
      })
    },
    infiniteToastTypeIcon () {
      this.$infiniteToast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
      })
    },
    infiniteToastPositionTop () {
      this.$infiniteToast({
        message: '自定义顶部提示',
        position: 'top'
      })
    },
    infiniteToastPositionBottom () {
      this.$infiniteToast({
        message: '自定义底部提示',
        position: 'bottom'
      })
    },
    infiniteToastPromise () {
      const toast = this.$infiniteToast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '倒计时 3 秒'
      })

      let second = 3
      const timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `倒计时 ${second} 秒`
        } else {
          clearInterval(timer)
          // 手动清除 Toast
          this.$infiniteToast.clear()
        }
      }, 1000)
    }
  }
}
</script>
