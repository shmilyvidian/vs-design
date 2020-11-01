<template>
  <button
    class="infinite-loading"
    :class="[
      `infinite-loading--${type}`,
    ]"
  >
    <i :class="icon" v-if="icon"></i>
    {{ loadingText }}
    <!-- 如果没有传入插槽的时候才显示 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'InfiniteLoading',
  props: {
    type: {
      type: String,
      default: 'default'
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
