<template>
  <div>
    <el-row class="infinite-doc-demo-block-row" v-for="(item, index) of pickerArr" :key="index">
      <h2 class="infinite-doc-demo-block-title">{{ item.title }}</h2>
      <div class="infinite-doc-demo-block-picker">
        <!-- <infinite-button @click="fnClassification(arguments, [item.clickMethod, index])">默认按钮</infinite-button> -->
        <van-cell 
          is-link 
          v-for="(cellItem, cellIndex) of item.cellArr" 
          :title="cellItem.title"  
          :key="cellIndex"
          @click="fnClassification(arguments, [cellItem.clickMethod, index, cellIndex])" >
        </van-cell>
        <infinite-popup
          v-for="(cellItem, cellIndex) of item.cellArr" 
          :key="cellIndex"
          v-model="cellItem.show"
          v-bind="cellItem.itemProp"
          @onClickOverlay="fnClassification(arguments, [cellItem.overlayMethod, index, cellIndex])"
        ></infinite-popup>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    onClick (argumentsArr = [], selfArr = []) {
      console.log('cl - selfArr == ', selfArr)
      console.log('cl - this.pickerArr == ', this.pickerArr)
      this.$set(this.pickerArr[selfArr[1]].cellArr[selfArr[2]], 'show', true)
    },
    onClickOverlay (argumentsArr = [], selfArr = []) {
      console.log('ol - selfArr == ', selfArr)
      console.log('ol - this.pickerArr == ', this.pickerArr)
      this.$set(this.pickerArr[selfArr[1]].cellArr[selfArr[2]], 'show', false)
    },
    fnClassification (argumentsArr = [], selfArr = []) { // selfArr= [method, index, cellIndex]
      console.log('fnClassification - selfArr == ', argumentsArr, selfArr)
      if (!this[selfArr[0]]) {
        return
      }
      this[selfArr[0]](argumentsArr, selfArr)
    }
  },
  data () {
    return {
      // show: false,
      pickerArr: [
        {
          title: '基础用法',
          cellArr: [
            {
              show: false,
              title: '展示弹出层',
              clickMethod: 'onClick',
              overlayMethod: 'onClickOverlay',
              stylex: {},
              itemProp: {
              }
            }
          ]
        },
        {
          title: '弹出位置',
          cellArr: [
            {
              show: false,
              title: '顶部弹出',
              clickMethod: 'onClick',
              overlayMethod: 'onClickOverlay',
              itemProp: {
                stylex: { height: '30%' },
                position: 'top'
              }
            },
            {
              show: false,
              title: '底部弹出',
              clickMethod: 'onClick',
              overlayMethod: 'onClickOverlay',
              itemProp: {
                stylex: { height: '30%' },
                position: 'bottom'
              }
            },
            {
              show: false,
              title: '左侧弹出',
              clickMethod: 'onClick',
              overlayMethod: 'onClickOverlay',
              itemProp: {
                stylex: { width: '30%', height: '100%' },
                position: 'left'
              }
            },
            {
              show: false,
              title: '底部弹出',
              clickMethod: 'onClick',
              overlayMethod: 'onClickOverlay',
              itemProp: {
                stylex: { width: '30%', height: '100%' },
                position: 'right'
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
