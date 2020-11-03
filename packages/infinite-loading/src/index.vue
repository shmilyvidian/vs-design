<template>
  <div class="loading-container">
    <div
      class="infinite-loading"
      :class="[
        `infinite-loading--${type}`,
      ]">

    </div>
    <van-loading :type="type" :color="color" :size="size" :textSize="textSize">{{loadingText}}</van-loading>
  </div>
</template>
<script>
import VanLoading from 'vant/lib/loading'
import 'vant/lib/loading/style'

export default {
  name: 'InfiniteLoading',
  components: {
    VanLoading
  },
  props: {
    // 类型，可选值为 spinner
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: '#c9c9c9'
    },
    // 加载图标大小，默认单位为px
    size: {
      type: [Number, String],
      default: '30px'
    },
    // 文字大小，默认单位为px
    textSize: {
      type: [Number, String],
      default: '14px'
    },
    icon: {
      type: String,
      default: ''
    },
    loadingText: {
      type: String,
      default: '加载中...'
    }
  },
  methods: {
  },
  mounted () {
    console.log('loading mounted', this.loadingText)
  }
}
</script>
