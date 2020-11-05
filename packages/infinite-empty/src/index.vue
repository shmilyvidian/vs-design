<template>
  <div class="empty-container">
    <van-empty
      :image="imageType"
      :imageSize="imageSize"
      :description="description"
    >
    <slot></slot>
    </van-empty>
  </div>
</template>
<script>
export default {
  name: 'InfiniteEmpty',
  props: {
    // 图片类型，可选值为 error network search，支持传入图片 URL
    imageType: {
      type: String,
      default: 'default'
    },
    // 图片大小，默认单位为 px
    imageSize: {
      type: [Number, String],
      default: ''
    },
    // 图片下方的描述文字
    description: {
      type: String,
      default: ''
    },
  },
  methods: {
    handleClick() {
      console.log('child loading click');
      this.$emit('handleClick');
    }
  },
  mounted () {
  }
}
</script>
