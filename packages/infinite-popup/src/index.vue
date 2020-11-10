<template>
  <div class="infinite-popup">
    <Popup
      v-model="isShow"
      :zIndex="zIndex"
      :overlay="overlay"
      :position="position"
      :duration="duration"
      :round="round"
      :closeOnClickOverlay="closeOnClickOverlay"
      @click-overlay="onClickOverlay"
    >内容</Popup>
  </div>
</template>

<script>
import Popup from 'vant/lib/popup'

export default {
  name: 'InfinitePopup',
  components: {
    Popup
  },
  model: {
    prop: 'show',
    event: 'currentShow'
  },
  props: {
    // 是否处于加载中状态
    show: {
      type: Boolean,
      default: false,
      required: false
    },
    // z-index 层级
    zIndex: {
      type: Number,
      default: 100,
      required: false
    },
    // 是否显示遮罩层
    overlay: {
      type: Boolean,
      default: true,
      required: false
    },
    // 弹出位置，可选值为 top bottom right left
    position: {
      type: String,
      default: 'center',
      required: false
    },
    // 动画时长，单位为毫秒
    duration: {
      type: [Number, Object],
      default: 300,
      required: false
    },
    // 是否显示圆角
    round: {
      type: Boolean,
      default: false,
      required: false
    },
    // 是否在点击遮罩层后关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
      required: false
    }

  },
  data () {
    return {
      isShow: this.show
    }
  },
  watch: {
    show: {
      handler (val) {
        this.isShow = this.show
        // this.$emit('onPopupShow', val)
      },
      immediate: true
    }
  },
  methods: {
    // 点击遮罩层时触发
    onClickOverlay () {
      this.$emit('onClickOverlay')
    }
  }
}
</script>
