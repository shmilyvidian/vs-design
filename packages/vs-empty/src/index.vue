<template>
  <div class="vs-empty-container" :style="insertStyle.container">
    <!-- 占位图片 -->
    <img
      :src="imageType === 'noData' ? defaultUrl : imageType"
      :style="{width: imageSize}"
    >
    <!-- 占位描述信息 -->
    <div class="vs-description" :style="insertStyle.description">{{ description }}</div>
    <slot></slot>
  </div>
</template>
<script>
 import noData from '../../theme-chalk/src/imgs/noData.png'

export default {
  name: 'VsEmpty',
  data() {
    return {
      defaultUrl: noData
    }
  },

  props: {
    // 图片类型，默认为 noData, 支持传入图片 URL
    imageType: {
      type: String,
      default: 'noData'
    },
    // 图片大小，默认单位为 px
    imageSize: {
      type: [Number, String],
      default: '138px'
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
          }
        }
      }
    }
  },
}
</script>
