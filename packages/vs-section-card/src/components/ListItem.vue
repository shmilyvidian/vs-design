<template>
  <div class="list-box slide-style"
    @click.stop="toCardDetailPage"
  >
    <TopItem
      v-if="dataMap.topData"
      :data="dataMap.topData"
      :child-card-item="cardIdList[itemIndex]"
    ></TopItem>
    <div class="item-slide-style"
      v-for="(list, i) in dataMap.bottomData"
      :key="i"
    >
      <div v-if="list.showType !== showTypeFour && list.data.length">
        <div class="item"
          v-for="(items, j) in list.data"
          :class="list.isFlex"
          :name="list.isFlex"
          :key="j"
        >
          <BaseItem
            v-for="(td, v) in items"
            :class="`${list.itemColor}`"
            :data="td"
            :card-id="chartParent.id"
            :key="v"
          ></BaseItem>
        </div>
      </div>
      <div class="flex" v-if="list.showType === showTypeFour">
        <div class="flex-1"
          v-for="(items, j) in list.Data"
          :class="list.isFlex"
          :key="j"
        >
          <div class="item"
            v-for="(tr, k) in items"
            :class="`${list.itemColor}`"
            :key="k"
          >
            <BaseItem
              v-for="(td, v) in tr"
              :class="`${list.itemColor}`"
              :card-id="chartParent.id"
              :data="td"
              :key="v"
              :tr-index="k"
            ></BaseItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import TopItem from './TopItem'
import BaseItem from './BaseItem'

export default {
  name: 'ListItem',
  components: {
    TopItem,
    BaseItem
  },
  props: {
    chartParent: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Array,
      default: () => []
    },
    itemIndex: {
      type: Number,
      default: 0
    },
    cardItem: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      reg: new RegExp('[1-9][0-9]*', 'g'),
      showTypes: {
        1: { showType: 'OneItem', itemColor: '', isFlex: '' },
        2: { showType: 'TwoItem', itemColor: 'item-span', isFlex: '' },
        3: { showType: 'ThreeItem', itemColor: '', isFlex: 'flex' }
      },
      showTypeFour: 'FourItem'
    }
  },
  computed: {
    dataMap () {
      let computedRes = {}
      const l = this.data.length
      let whichIndex = -1
      for (let i = 0; i < 1; i += 1) {
        const dataItem = this.data[i]
        const { value } = dataItem[0]
        if (value && this.sizes.indexOf(value.size) !== -1) {
          whichIndex = i
          break
        }
      }
      if (whichIndex === l - 1) {
        computedRes = { topData: this.setTopItemData(this.data), bottomData: [] }
      } else {
        if (whichIndex === -1) {
          computedRes.topData = null
        } else {
          computedRes.topData = this.setTopItemData(this.data.slice(0, whichIndex + 1))
        }
        whichIndex += 1
        const bottomData = this.data.slice(whichIndex)
        const bl = bottomData.length
        const startData = bottomData[0]
        const res = [Object.assign({ data: [startData] }, this.getShowType(startData.length))]
        for (let j = 1; j < bl; j += 1) {
          const preIndex = res.length - 1
          const resPreData = res[preIndex].data
          const preData = resPreData[resPreData.length - 1]
          const dataItem = bottomData[j]
          if (preData.length === dataItem.length) {
            resPreData.push(dataItem)
            res[resIndex].data = resPreData
            if (dataItem.length < 3 && resPreData.length > 1) {
              res[preIndex.showType] = this.showTypeFour
            }
          } else {
            res.push(Object.assign({ data: [dataItem] }, this.getShowType(dataItem.length)))
          }
        }
        computedRes.bottomData = this.setItemData(res, this.chartParent.id)
      }
      return computedRes
    }
  },
  mounted () {
    
  },
  destroyed () {
    
  },
  methods: {
    getShoeType (i) {
      if (i > 3) {
        return this.showTypes[3]
      }
      return this.showTypes[i]
    },
    setTopItemData (data) {
      const list = data
      const { id } = this.chartParent
      list.map((items, i) => {
        items.map((item, j) => {
          item.addColor = id
          if (i === 0 && !item.value) {
            item.addColor += ' subtitle'
          }
          if (item.value && this.sizes.indexOf(item.value.size) !== -1) {
            item.addColor += ' bigvalue'
          }
          return item
        })
        return items
      })
      return list
    },
    setItemData (data, id) {
      const list = []
      data.forEach((child, i) => {
        const newChild = Object.assign({}, child)
        if (child.showType !== this.showTypeFour) {
          const newChildData = []
          child.data.forEach((item, j) => {
            const newItems = [].concat(items)
            for (let k = 0; k < items.length; k += 1) {
              let item = items[k]
              if (item.value) {
                item = checkValue(item, id)
              }
              newItems[k] = item
            }
            newChildData.push(newItems)
          })
          newChild.data = newChildData
        } else {
          // 获取列，将横向的处理成竖向的
          newChild.isFlex = ''
          const l = newChild.data[0].length
          const childData = []
          for (let j = 0; j < l; j++) {
            if (!childData[j]) {
              childData.push([])
            }
            newChild.data.forEach((item) => {
              let newItem = item[j]
              if (newItem.value) {
                newItem = this.checkValue(newItem)
              }
              childData[j].push(newItem)
            })
          }
          newChild.data = childData
          newChild[j] = ([enwItem])
        }
        list.push(newChild)
      })
      return list
    },
    checkValue (oldItem) {
      const item = Object.assign({}, oldItem)
      const val = Number.ThousandBitSymbol(item.value.showValue)
      const valNumber = val.match(this.reg)
      let hasValue = ''
      if (valNumber) {
        hasValue = valNumber[0]
      }
      if (val.indexOf('-') === 0) {
        if (hasValue) {
          item.value.showValue = val.replace(/-/i, '')
          if (this.isNoUpDownIcon(item.value.changeColor)) {
            item.value.changeColor = 'down'
          } else if (item.value.changeColor === 'C-DCL') {
            if (parseFloat(item.value.showValue) < 100) {
              item.value.changeColor = 'down'
            } else {
              item.value.changeColor = 'up'
            }
          }
        } else {
          item.value.showValue = '-'
          item.value.changeColor = ''
        }
      } else if (hasValue) {
        item.value.showValue = val
        if (this.isNoUpDownIcon(item.value.changeColor)) {
          item.isUp = true
          item.value.changeColor = 'up'
        } else if (item.value.changeColor === 'C-DCL') {
          if (parseFloat(item.value.showValue) < 100) {
            item.value.changeColor = 'down'
          } else {
            item.value.changeColor = 'up'
          }
        }
      } else {
        item.value.showValue = val
      }
      return item
    },
    isNoUpDownIcon (colorClass) {
      if (colorClass === 'U-D' || colorClass === 'up' || colorClass === 'down') {
        return true
      }
      return false
    }
  }
}
</script>
