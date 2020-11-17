<template>
  <div class="empty-container" :style="insertStyle.container">
    <img
      :src="defaultImageTypes.includes(imageType) ? defaultUrl : imageType"
      :style="{width: imageSize}"
    >
    <div class="description" :style="insertStyle.description">{{ description }}</div>
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'InfiniteEmpty',
  data() {
    return {
      defaultImageTypes: ['noUpdate', 'noData', 'noMessage', 'noFinish', 'noTask', 'noNetwork'],
    }
  },
  computed: {
    defaultUrl() {
      return require(`../imgs/${this.imageType}.png`)
    }
  },
  props: {
    // 图片类型，可选值为 noData, noMessage, noFinish, noTask, noNetwork, noUpdate, 支持传入图片 URL
    imageType: {
      type: String,
      default: 'noData'
    },
    // 图片大小，默认单位为 px
    imageSize: {
      type: [Number, String],
      default: '130px'
    },
    // 图片下方的描述文字
    description: {
      type: String,
      default: ''
    },
    // 可传入自定义样式
    insertStyle: {
      type: Object,
      default: () => {
        return {
          container: {
          },
          description: {
            color: '#000'
          }
        }
      }
    }
  },
  methods: {
    handleClick() {
      console.log('child loading click');
      this.$emit('handleClick');
    },
    clickGoBack() {
      
    }
  },
  mounted () {
  }
}
</script>
