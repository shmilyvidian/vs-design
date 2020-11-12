<template>
  <van-button
    :type="type"
    :disabled="disabled"
    :plain="plain"
    :square="square"
    :round="round"
    :icon="icon"
    :size="size"
    :class="[
      'infinite-button',
      `infinite-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled,
      },
    ]">
    <!-- 如果没有传入插槽的时候才显示 -->
    <span v-if="$slots.default"><slot></slot></span>
  </van-button>

</template>
<script>
export default {
  name: 'InfiniteButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  mounted () {
    console.log(this.$attrs)
  }
}
</script>
