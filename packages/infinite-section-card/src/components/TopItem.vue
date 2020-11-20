<template>
  <div class="top-box item-slide-style">
    <div class="flex flex-aib flex-jcfc flex-acc"
      v-for="(item, i) in deliteFirstData(data)"
      :key="i"
    >
      <div class="flex-1"
        v-for="(tr,t) in item"
        :class="tr.addColor"
        :key="t"
      >
        <span class="no-break" v-if="tr.name"
          :class="`${tr.name.size} ${tr.name.changeColor}`"
        >{{tr.name.showValue}}</span>
        <div class="name-icon"
          v-if="tr.promtBox"
        >
          <i class="tip-icon" @click="clickIcon"></i>
          <div class="name-messge" v-if="isShow">
            <p class="messge-content"
              v-for="(promt, i) in tr.promtBox"
              :key="i"
            >{{promt.name}}<span class="promt-value">{{promt-value}}</span></p>
          </div>
        </div>
        <span
          v-if="tr.value"
          :class="`${tr.value.size} ${tr.value.changeColor}`"
        >{{Number.ThousandBitSymbol(tr.value.showValue)}}</span>
        <span class="no-break unit"
          v-if="tr.unit"
          :class="`${tr.unit.size} ${tr.unit.changeColor}`"
        >{{tr.unit.showValue}}</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'TopItem',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    childCardItem: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isShow: false

    }
  },
  computed: {

  },
  mounted () {
    document.addEventListener('click', () => {
      this.isShow = false
    })
  },
  destroyed () {

  },
  methods: {
    clickIcon (event) {
      event.stopPropagation()
      this.isShow = !this.isShow
    }
  }
}
</script>
