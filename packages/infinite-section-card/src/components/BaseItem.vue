<template>
  <div :class="`base-item flex-1 ${getClass(data)}`">
    <span
      v-if="data.name"
      :class="`no-break ${data.name.size} ${data.name.changeColor} ${speciaStyle()} ${getBaseItem()}`"
    >{{data.name.showValue}}</span>
    <i class="is-no-center" v-if="data.value.showValue">
      
    </i>
    <template
      v-if="detailCards.indexOf(cardId === -1)"
      :class="`${data.value.size} ${data.value.changeColor}`">
      <!-- <Down
        class="downIcon item-icon"
        v-if="data.isDown" />
      <Up
        class="upIcon"
        v-if="data.isUp" /> -->
    ></template>
    <template v-else>
      <!-- <DetailDown
        class="downIcon detail-icon"
        v-if="data.isDown" />
      <DetailUp
        class="upIcon"
        v-if="data.isUp" /> -->
    </template>
    <span
      v-if="data.value"
      :class="`${data.value.size} ${data.value.changeColor}`"
    >
      {{Number.ThousandBitSymbol(data.value.showValue)}}
      <span v-if="data.valueRight">
        ({{Number.ThousandBitSymbol(data.valueRight.showValue)}})
      </span>
    </span>
    <span class="no-break"
      v-if="data.unit"
      :class="`${data.unit.size} ${data.unit.changeColor}`"
    >{{data.unit.showValue}}</span>
  </div>
</template>
<script>

export default {
  name: 'BaseItem',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    trIndex: {
      type: Number,
      default: 0
    },
    cardId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  mounted () {
    
  },
  destroyed () {
    
  },
  methods: {
    getClass (item) {
      let res = item.addColor || ''
      const { value } = item
      if (value && value.changeColor && value.changeColor.indexOf('F-1') !== -1) {
        res += ' flex'
      }
      return res
    },
    speciaStyle () {
      let res = 'name'
      if (this.listItemStyle) {
        res = 'spciaStyle'
      }
      return res
    },
    getBaseItem () {
      let res = ''
      if (this.data.value.showValue !== '-' && this.listItemStyle) {
        res = 'FF'
      }
      return res
    }
  }
}
</script>
