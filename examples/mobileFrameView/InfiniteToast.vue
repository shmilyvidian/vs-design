<template>
  <div>
    <h3 class="infinite-mobile-h3">基础用法</h3>
    <el-row>
      <van-cell is-link title="文字提示" @click="infiniteToastText" />
      <van-cell is-link title="加载提示" @click="infiniteToastLoading" />
      <van-cell is-link title="成功提示" @click="infiniteToastSuccess" />
      <van-cell is-link title="失败提示" @click="infiniteToastFail" />
    </el-row>
    <h3 class="infinite-mobile-h3">自定义图标</h3>
    <el-row>
      <van-cell is-link title="自定义图标提示" @click="infiniteToastIcon" />
      <van-cell is-link title="自定义图片提示" @click="infiniteToastImg" />
      <van-cell is-link title="自定义加载图标提示" @click="infiniteToastTypeIcon" />
    </el-row>
    <h3 class="infinite-mobile-h3">自定义位置</h3>
    <el-row>
      <van-cell is-link title="自定义顶部提示" @click="infiniteToastPositionTop" />
      <van-cell is-link title="自定义底部提示" @click="infiniteToastPositionBottom" />
    </el-row>
    <h3 class="infinite-mobile-h3">动态更新提示</h3>
    <el-row>
      <van-cell is-link title="动态更新提示" @click="infiniteToastPromise" />
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
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

<style scopt>
  .infinite-mobile-h3 {
    margin: 4.267vw 0 0 12px;
  }
</style>
