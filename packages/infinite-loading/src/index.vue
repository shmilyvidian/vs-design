<template>
    <van-loading 
      :type="type"
      :color="color"
      :size="size"
      :textSize="textSize"
      @click="handleClick">
      {{loadingText}}
    </van-loading>
</template>
<script>
import VanLoading from 'vant/lib/loading'

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
    handleClick() {
      console.log('child loading click');
      this.$emit('handleClick');
    }
  },
  mounted () {
    console.log('loading mounted', this.loadingText)
  }
}
</script>
