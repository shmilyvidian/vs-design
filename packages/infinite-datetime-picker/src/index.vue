<template>
  <div class="infinite-datetime-picker-template">
    <!-- 时间选择器显示title及icon -->
    <div class="infinite-datetime-picker-title"
      @click="openDatePopup"
      :style="{background: pickerColor, borderRadius: pickerRadius}">
      <div class="infinite-datetime-picker-title-left">
        <span v-if="!hasDateTitleSlot">{{dateTitleLeft}}</span>
        <slot name="dateTitle" ></slot>
      </div>
      <div class="infinite-datetime-picker-title-right">
        <span :class="span">{{ currentDate | filterCurrentDate(that) }}</span>
        <i :class="iconClass" v-if="!hasIconSlot"></i>
        <!-- <i :class="iconClass" v-if="useDefaultIcon && !hasIconSlot"></i> -->
        <!-- <van-icon :class="span" :name="icon" v-bind="iconStyle" v-if="!useDefaultIcon && !hasIconSlot" /> -->
        <slot name="icon" ></slot>
      </div>
    </div>
    <!-- end of 时间选择器显示title及icon -->
    <!-- popup弹窗 -->
    <Popup
      class="infinite-datetime-picker-popuper"
      position="bottom"
      ref="popup"
      v-model="popupShow"
      @click-overlay="clickOverlay"
    >
      <!-- picker类型时间选择区 -->
      <Picker
        v-if="weekArr.includes(pickerType)"
        ref="picker"
        v-bind="nextPropsPickerObj"
        :default-index="pickerDefaultIndex"
        :columns="pickerColumns"
        :cancel-button-text="cancelButtonText"
        :confirm-button-text="confirmButtonText"
        @cancel="pickerCancel"
        @confirm="pickerConfirm"
        @change="pickerChange"
      >
      </Picker>
      <!-- end of picker类型时间选择区 -->
      <!-- DatetimePicker类型时间选择区 -->
      <DatetimePicker
        ref="datetimePicker"
        v-else
        :type="pickerType"
        v-bind="nextPropsObj"
        v-model="myCurrentDate"
        :formatter="formatter"
        :min-date="minDate"
        :max-date="maxDate"
        :filter="filter"
        :cancel-button-text="cancelButtonText"
        :confirm-button-text="confirmButtonText"
        @cancel="pickerCancel"
        @confirm="pickerConfirm"
        @change="pickerChange"
      ></DatetimePicker>
      <!-- end of DatetimePicker类型时间选择区 -->
      <!-- 时间选中行 -->
      <p class="infinite-datetime-picker-center-highlight"></p>
      <!-- end of 时间选中行 -->
    </Popup>
    <!-- end of popup弹窗 -->
  </div>
</template>
<script>

import Popup from 'vant/lib/popup'
import Picker from 'vant/lib/picker'
import DatetimePicker from 'vant/lib/datetime-picker'
// import VanIcon from 'vant/lib/icon'
import 'vant/lib/popup/style'
import 'vant/lib/picker/style'
import 'vant/lib/datetime-picker/style'

export default {
  name: 'InfiniteDatetimePicker',
  components: {
    Popup, 
    Picker, 
    DatetimePicker
    // VanIcon
  },
  filters: {
    // 获取及输出的时间都为yyyyMMdd格式,如：20200101，无有'-'或'/'，就算有也要在接收时处理掉，所有显示时间这里加上-
    filterCurrentDate (value = '', that) {
      const filterStr = value.toString().replace(/[^0-9]/ig, '')
      if (!value) {
        return value
      }
      const filterStrLength = filterStr.length
      const startZeroLengthFour = filterStr.substr(0, 4)
      const startFourLengthTwo = filterStr.substr(4, 2)
      const startSixLengthTwo = filterStr.substr(6, 2)
      const startTwoLengthTwo = filterStr.substr(2, 2)
      const startTwoLengthFour = filterStr.substr(2, 4)
      const startZeroLengthTwo = filterStr.substr(0, 2)
      const endFourLengthTwo = filterStr.substr(-4, 2)
      const endTwoLengthTwo = filterStr.substr(-2, 2)
      switch (that.type) {
        case 'just-show': // 只展示
          return `${startZeroLengthFour}.${startFourLengthTwo}.${startSixLengthTwo}`
        case 'date': // 年月日
          return `${startZeroLengthFour}.${startFourLengthTwo}.${startSixLengthTwo}`
        case 'year-month': // 年月
          return `${startZeroLengthFour}.${startFourLengthTwo}`
        case 'month-day': // 月日
          return `${endFourLengthTwo}.${endTwoLengthTwo}`
        case 'year': // 年
          return `${startZeroLengthFour}`
        case 'month': // 月
          return (filterStrLength === 8 || filterStrLength === 6)
            ? `${startFourLengthTwo}月`
            : (filterStrLength === 4 ? `${startTwoLengthTwo}月` : `${startZeroLengthTwo}月`)
        case 'quarterly': // 季度
          return `${startZeroLengthFour}年Q${Math.ceil(Number(startFourLengthTwo) / 3)}` 
        case 'week-end': // 周期weekEnd: 截至
          if (filterStrLength === 8) {
            return `截止至${startZeroLengthFour}.${startFourLengthTwo}.${startSixLengthTwo}`
          }
          return `截止至${startZeroLengthTwo}.${startTwoLengthFour}`
        case 'week-segment': // 周期weekSegment:
          if (filterStrLength === 8) {
            let valueStr = filterStr
            const matchFlag = that.pickerColumns.some((picItem, picIndex) => {
              const str = picItem.replace(/[^0-9]/ig, '')
              if (filterStr === str.substr(-8)) {
                valueStr = str.substr(0, 4) === str.substr(-8, 4)
                  ? `${str.substr(0, 4)}.${str.substr(4, 2)}.${str.substr(6, 2)}-${str.substr(12, 2)}.${str.substr(14, 2)}`
                  : `${str.substr(0, 4)}.${str.substr(4, 2)}.${str.substr(6, 2)}-${str.substr(8, 4)}.${str.substr(12, 2)}.${str.substr(14, 2)}`
                return true
              }
              return false
            })
            if (!matchFlag) {
              console.log('warning: 当前currentDate与传入的validDate的元素不匹配')
            }
            return valueStr
          }
          return filterStr
        default:
          return `${filterStr}`
      }
    }
  },
  model: {
    prop: 'currentDate',
    event: 'currentChange'
  },
  props: {
    // 时间选择器类型
    type: {
      type: String,
      default: 'date'
    },
    // 当前时间，接收格式为20200101
    currentDate: {
      type: String,
      default: ''
    },
    // 起始时间，接收格式为20200101
    startTime: {
      type: String,
      default: ''
    },
    // 结束时间，接收格式为20200101
    endTime: {
      type: String,
      default: ''
    },
    // 是否使用默认时间图标，像日历那样的，为false时显示箭头，打开上，关闭下
    useDefaultIcon: {
      type: Boolean,
      default: true
    },
    // 周期-连续类型week-segment可选时间区间
    validDate: {
      type: Array,
      default: () => ([])
    },
    // 周期-不连续类型week-end类型可选时间区间
    sundayArray: {
      type: Array,
      default: () => ([])
    },
    // 选择器背景色
    pickerColor: {
      type: String,
      default: '#2e3036'
    },
    // 圆角大小
    pickerRadius: {
      type: String,
      default: '0'
    },
    // 右侧图标配置，size、color等
    iconStyle: {
      type: Object,
      default: () => ({
        size: '12px'
      })
    },
    // 是否在取消或点击蒙层时保留选中值
    isItSaveSelected: {
      type: Boolean,
      default: false
    },
    // 取消按钮文字
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    // 确认按钮文字
    confirmButtonText: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {
      that: this, // 给filter使用
      myCurrentDate: new Date(), // 时间选择器使用v-model绑定的时间，格式是时间格式（new Date()）
      popupShow: false, // 时间选择弹窗是否弹出
      lastMonthArr: ['12', '03', '06', '09'], // 季度末月份
      weekArr: ['week-end', 'week-segment', 'year', 'month'], // type为该数组内的使用picker组件
      propsObj: { // 默认的关于时间选择器的配置
        itemHeight: '36px', // 单个选项高度
        visibleItemCount: 5 // 可见的选项个数
      },
      propsPickerObj: { // 默认的关于picker选择器的配置
        itemHeight: '36px', // 单个选项高度
        visibleItemCount: 5, // 可见的选项个数
        showToolbar: true // 是否显示顶部栏
      }
    }
  },
  computed: {
    // 根据需要返回原type或修改type
    pickerType () {
      switch (this.type) {
        case 'quarterly': // 季度类型
          return 'year-month'
        default:
          return this.type
      }
    },
    // 左边的span类名
    span () {
      let iconStr = ''
      const arr = ['just-show']
      if (this.hasIconSlot) {
        return ``
      }
      if (arr.includes(this.type)) {
        return `${iconStr}`
      }
      if (this.useDefaultIcon) {
        return `${iconStr} default`
      }
      iconStr = this.popupShow ? `icon-caret-up` : `icon-caret-down`
      return `${iconStr} iconDefault`
    },
    // 右边的图标name
    icon () {
      // const iconStr = 'icon micofont'
      // const iconStr = ''
      console.log('icon == ', this.type, this.useDefaultIcon)
      const arr = ['just-show']
      if (arr.includes(this.type)) {
        return ''
      }
      // if (this.useDefaultIcon) {
      // return `${iconStr} default`
      // return `tosend`
      return `play`
      // }
      // return ''
      // return this.popupShow ? `${iconStr} icon-caret-up` : `${iconStr} icon-caret-down`
      // return this.popupShow ? `arrow-up` : `arrow-down`
    },
    // 右边的图标-图片类名
    iconClass () {
      const iconStr = 'icon-calendar'
      const arr = ['just-show']
      if (arr.includes(this.type)) {
        return `${iconStr}`
      }
      if (this.useDefaultIcon) {
        return `${iconStr} default`
      }
      return this.popupShow ? `${iconStr} infinite-table-icon-down` : `${iconStr} infinite-table-icon-up`
      // return `${iconStr} icon`
    },
    // 右边的图标-类名
    // vanIconClass () {
    //   const iconStr = 'icon-calendar'
    //   const arr = ['just-show']
    //   if (arr.includes(this.type)) {
    //     return ''
    //   }
    //   return `${iconStr} default`
    // },
    // 有无icon的slot
    hasIconSlot () {
      return !!(this.$slots && this.$slots.icon)
    },
    // 有无日期title的slot
    hasDateTitleSlot () {
      return !!(this.$slots && this.$slots.dateTitle)
    },
    // 外部传入的关于时间选择器的配置
    nextPropsObj () {
      return Object.assign({}, this.propsObj, {
        ...this.$attrs
      })
    },
    // 外部传入的关于picker选择器的配置
    nextPropsPickerObj () {
      return Object.assign({}, this.propsPickerObj, {
        ...this.$attrs
      })
    },
    // 时间可选区间，若有validDate则时间筛选器的选项为validDate的元素
    timeSelectableInterval () {
      if (!Array.isArray(this.validDate) || !this.validDate.length) {
        return []
      }
      const arr = this.validDate
      return arr.sort((a, b) => a - b)
    },
    // 外部传入的时间选择器的起始时间minDate
    minDate () {
      let { startTime } = this
      const arr = ['week-end', 'week-segment']
      if (arr.includes(this.type)) {
        return ''
      }
      if (!startTime) {
        console.log('err: 请带入startTime')
      }
      if (this.timeSelectableInterval.length) {
        startTime = this.timeSelectableInterval[0].replace(/[^0-9]/ig, '').substr(-8)
      }
      return this.setMyCurrentDate(startTime)
    },
    // 外部传入的时间选择器的结束时间maxDate
    maxDate () {
      let { endTime } = this
      const arr = ['week-end', 'week-segment']
      if (arr.includes(this.type)) {
        return ''
      }
      if (!endTime) {
        console.log('err: 请带入endTime')
      }
      if (this.timeSelectableInterval.length) {
        endTime = this.timeSelectableInterval[this.timeSelectableInterval.length - 1].replace(/[^0-9]/ig, '').substr(-8)
      }
      // console.log('dasdasdas', this.setMyCurrentDate(endTime))
      return this.setMyCurrentDate(endTime)
    },
    // 时间的转换格式
    formatStr () {
      switch (this.type) {
        case 'date': // 年月日
          return 'yyyyMMdd'
        case 'year-month': // 年月
          return 'yyyyMM'
        case 'month-day': // 月日
          return 'MMdd'
        case 'quarterly': // 季度
          return 'yyyyMM'
        default:
          return 'yyyyMMdd'
      }
    },
    // 默认的关于picker的配置，sundayArray: week-end(格斯：['0201'])  validDate: week-segment(格式：['2020.08.07-2020.08.23'])
    pickerColumns () {
      const arr = Array.isArray(this.sundayArray) && this.sundayArray.length
        ? this.sundayArray.map(item => {
          if (item.length === 4) {
            return `${item.substr(0, 2)}.${item.substr(2, 2)}`
          } else if (item.length === 8) {
            return `${item.substr(0, 4)}.${item.substr(4, 2)}.${item.substr(6, 2)}`
          }
          return item
        })
        : (Array.isArray(this.validDate) && this.validDate.length
          ? this.validDate : [])
      
      const yearArr = ['year']
      const monthArr = ['month']
      const unit = yearArr.includes(this.type) ? '年' : (monthArr.includes(this.type) ? '月' : '')
      let accordance = 0
      if (yearArr.includes(this.type)) {
        accordance = this.startTime.substr(0, 4)
      }
      if (monthArr.includes(this.type)) {
        accordance = (this.startTime === 8 || this.startTime === 6)
          ? `${this.startTime.substr(4, 2)}`
          : (this.startTime.length === 4 ? `${this.startTime.substr(2, 2)}` : this.startTime)
      }
      if (yearArr.includes(this.type) || monthArr.includes(this.type)) {
        const len = this.endTime - this.startTime + 1
        for (let index = 0; index < len; index += 1) {
          arr.push(`${Number(accordance) + index}${unit}`)
        }
      }
      // console.log('arr === ', arr, this.endTime, this.startTime, accordance)
      return arr
    },
    // 默认的关于picker的选中索引，默认0， 有传入的v-model决定
    pickerDefaultIndex () {
      let index = 0
      let arr = []
      const yearArr = ['year']
      const monthArr = ['month']
      if (Array.isArray(this.sundayArray) && this.sundayArray.length) {
        arr = this.sundayArray || []
        arr.some((picItem, picIndex) => {
          if (picItem === this.currentDate) {
            index = picIndex
            return true
          }
          return false
        })
      } else if (Array.isArray(this.validDate) && this.validDate.length) {
        arr = this.validDate || []
        arr.some((picItem, picIndex) => {
          const str = picItem.replace(/[^0-9]/ig, '')
          if (str.substr(-8) === this.currentDate) {
            index = picIndex
            return true
          }
          return false
        })
      } else if (yearArr.includes(this.type) || monthArr.includes(this.type)) {
        arr = this.pickerColumns || []
        arr.some((picItem, picIndex) => {
          const substrlen = yearArr.includes(this.type) ? 4 : (monthArr.includes(this.type) ? 2 : 8)
          const prefix = picItem.length === 2 ? '0' : ''
          const picItemStr = `${prefix}${picItem}`
          if (`${picItemStr.substr(0, substrlen)}` === this.currentDate) {
            index = picIndex
            return true
          }
          return false
        })
      }
      return index
    },
    dateTitleLeft () {
      switch (this.type) {
        case 'just-show':
          return `日期`
        case 'date': 
          return `日期`
        case 'year-month': 
          return `日期`
        case 'month-day':
          return `日期`
        case 'year':
          return `日期`
        case 'month':
          return `日期`
        case 'quarterly': 
          return `日期`
        case 'week-end':
          return `日期`
        case 'week-segment':
          return `统计时间`
        default:
          return ''
      }
    }
  },
  watch: {
    currentDate: {
      handler (val) {
        this.myCurrentDate = this.setMyCurrentDate(val)
      },
      immediate: true
    }
  },
  methods: {
    // 时间选择器的v-model绑定时间的赋值公用方法
    setMyCurrentDate (value = '') {
      if (!value) {
        return new Date()
      }
      const str = value.replace(/[^0-9]/ig, '')
      const strLen = str.length
      // console.log('value, str, strLen === ', value, str, strLen)
      // const filterStrLength = filterStr.length
      const startZeroLengthFour = str.substr(0, 4)
      const startFourLengthTwo = str.substr(4, 2)
      const startSixLengthTwo = str.substr(6, 2)
      const startTwoLengthTwo = str.substr(2, 2)
      const startTwoLengthFour = str.substr(2, 4)
      const startZeroLengthTwo = str.substr(0, 2)
      const endFourLengthTwo = str.substr(-4, 2)
      const endTwoLengthTwo = str.substr(-2, 2)

      switch (this.type) {
        case 'date': // 年月日
          if (strLen !== 8) {
            console.log('err: 请传入正确格式的年月日（如20200101）')
          }
          return new Date(`${startZeroLengthFour}/${startFourLengthTwo}/${startSixLengthTwo}`)
        case 'year-month': // 年月--返回的格式是yyyyMM如202002格式，没有日，如有需求差异请自行解决该问题
          if (strLen !== 6 && strLen !== 8) {
            console.log('err: 请传入正确格式的年月（如202001）')
          }
          return new Date(`${startZeroLengthFour}/${startFourLengthTwo}`)
        case 'month-day': // 月日--返回的格式是MMdd如0201格式，没有年，如有需求差异请自行解决该问题
          if (strLen !== 4 && strLen !== 8) {
            console.log('err: 请传入正确格式的月日（如0101）')
          }
          return new Date(`${endFourLengthTwo}/${endTwoLengthTwo}`)
        case 'year': // 年--返回的格式是yyyy如2020格式，没有月日，如有需求差异请自行解决该问题
          if (strLen !== 4 && strLen !== 8) {
            console.log('err: 请传入正确格式的年（如2020）')
          }
          return `${startZeroLengthFour}`
        case 'month': // 月
          if (strLen !== 2 && strLen !== 6 && strLen !== 8) {
            console.log('err: 请传入正确格式的月（如01）')
          }
          if (strLen === 1) {
            return `0${str}`
          }
          return `${str}`
        case 'quarterly': // 季度，取该季度最后一个月作为参数
          if (strLen !== 6 && strLen !== 8) {
            console.log('err: 请传入正确格式的季度（如202003）')
          }
          return new Date(`${startZeroLengthFour}/${this.lastMonthArr[Math.ceil(Number(startFourLengthTwo) / 3) % 4]}`)
        case 'week-end': // 周期weekEnd: 时间不连续，返回的格式是MMdd，没有年，如有需求差异请自行解决该问题
          if (strLen !== 4 && strLen !== 8) {
            console.log('err: 请传入正确格式的月日（如0101）')
          }
          return `${str}`
        case 'week-segment': // 周期weekSegment: 时间连续，返回的格式是yyyyMMdd，与validDate不匹配，取值为validDate元素中后面的时间，如有需求差异请自行解决该问题
          if (strLen !== 8 && strLen !== 16) {
            console.log('err: 请传入正确格式的年月日（如20200101）')
          }
          return `${str.substr(-8)}`
        default:
          return new Date(`${str}`)
      }
    },
    // 打开弹窗，选择时间
    openDatePopup () {
      const arr = ['just-show']
      if (arr.includes(this.type)) {
        return
      }
      this.popupShow = true
    },
    closePopup (value, index) {
      this.popupShow = false
      if (this.isItSaveSelected) {
        return
      }
      const { picker } = this.$refs // datePicker时为undefined
      if (picker) { // 除确定外关闭弹窗时重置选中项(picker-model)
        picker.setIndexes([this.pickerDefaultIndex])
      } else { // 除确定外关闭弹窗时重置选中项(detaPicker的v-model)
        this.myCurrentDate = this.setMyCurrentDate(this.currentDate)
      }
    },
    // 点击遮罩层事件
    clickOverlay (value, index) {
      this.closePopup(value, index)
      this.$emit('click-overlay', this.currentDate, value, index)
    },
    // picker取消按钮事件
    pickerCancel (value, index) {
      this.closePopup(value, index)
      this.$emit('cancel', this.currentDate, value, index)
    },
    // 确认按钮事件
    pickerConfirm (value, index) {
      const { picker } = this.$refs // datePicker时为undefined
      let currentDate = ''
      switch (this.type) {
        case 'week-end': // 周期weekEnd: 时间不连续，返回的格式是MMdd，没有年，如有需求差异请自行解决该问题
          if (!this.sundayArray.length) {
            console.log('err: week-end类型请传入sundayArray数组')
          }
          break
        case 'week-segment': // 周期weekSegment: 时间连续，返回的格式是yyyyMMdd，与validDate不匹配，取值为validDate元素中后面的时间，如有需求差异请自行解决该问题
          if (!this.validDate.length) {
            console.log('err: week-segment类型请传入validDate数组')
          }
          break
        default:
          break
      }
      if (picker) { // 除确定外关闭弹窗时重置选中项(picker-model)
        if (!value) {
          return 
        }
        currentDate = this.setMyCurrentDate(value)
      } else { // 除确定外关闭弹窗时重置选中项(detaPicker的v-model)
        if (!this.isDate(value)) {
          return
        }
        this.myCurrentDate = value
        currentDate = this.format(value.getTime(), this.formatStr)
      }
      this.popupShow = false
      // 使用emit形式修改外层的v-model的值，类似于change(value) => {currentDate = value}
      this.$emit('currentChange', currentDate)
      // confirm是确认按钮的回调，但请不要使用这个在业务层修改v-model，直接获取v-model的值更推荐
      this.$emit('confirm', currentDate, value, index)
    },
    // 判断是否是时间格式
    isDate (date) {
      return date instanceof Date && !Number.isNaN(date.valueOf())
    },
    // 时间format转换
    format (jsondate, fmt) {
      if (Number.isNaN(parseInt(jsondate, 10))) {
        return '--'
      }
      const date = new Date(jsondate)
      const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds() // 毫秒
      }
      let newFormat = fmt
      if (/(y+)/.test(fmt)) {
        newFormat = newFormat.replace(
          RegExp.$1,
          (`${date.getFullYear()}`)
            .substr(4 - RegExp.$1.length)
        )
      }
      Object.keys(o)
        .forEach(k => {
          if (new RegExp(`(${k})`).test(newFormat)) {
            // console.log('(${o[k]}).length == ', `${o[k]}`, (`${o[k]}`).length)
            newFormat = newFormat.replace(
              RegExp.$1,
              (RegExp.$1.length === 1)
                ? (o[k])
                : ((`00${o[k]}`).substr((`${o[k]}`).length))
            )
          }
        })
      return newFormat
    },
    // 选项发生改变事件
    pickerChange (ref, value, index) {
      const { picker } = this.$refs // datePicker时为undefined
      if (picker) { // picker组件选项发生改变
        
      } else { // datetimePicker组件选项发生改变
        // 有可选区间的情况下需要进行v-model的重置，目前只支持date年月日yyyyMMdd格式
        if (Array.isArray(this.validDate) && this.validDate.length) {
          const myCurrentDateStr = this.format(this.myCurrentDate.getTime(), this.formatStr)
          let a = 0 // 需要默认选中的datetimePicker的v-model中的年
          let b = 0 // 需要默认选中的datetimePicker的v-model中的月
          let c = 0 // 需要默认选中的datetimePicker的v-model中的日
          const arr = this.timeSelectableInterval
          arr.reverse() // 方便选中最后一个
          arr.forEach((item, index) => {
            if (Number(item.substr(0, 4)) === Number(myCurrentDateStr.substr(0, 4))) {
              a = Number(item.substr(0, 4))
              // 没选(选中最后一个)，当匹配上时二次修改，如匹配不上，则选中的是最后一个
              if (!b || Number(item.substr(0, 6)) === Number(myCurrentDateStr.substr(0, 6))) {
                b = Number(item.substr(4, 2))
                if (!c || Number(item.substr(0, 8)) === Number(myCurrentDateStr.substr(0, 8))) {
                  c = Number(item.substr(6, 2))
                }
              }
            }
          })
          // 可选时间区间不连续情况下因为change事件只改变一个列的选项，所有需要重置v-model的值以免选中缺失值
          this.$nextTick(() => {
            // 理论上年月日齐全，这时a,b,c要么跟myCurrentDate保持一致，要么前面一致的情况下后面不存在，则必须修改后面的时间值以保持一致
            if (a && b && c) {
              this.myCurrentDate = new Date(`${a}/${b}/${c}`)
            } else {
              const str = this.timeSelectableInterval[this.timeSelectableInterval.length - 1]
              this.myCurrentDate = new Date(`${str.substr(0, 4)}/${str.substr(4, 2)}/${str.substr(6, 2)}`)
            }
          })
        }
      }
      this.$emit('change', ref, value, index)
    },
    // 选项格式化函数
    formatter (type, val) {
      switch (type) {
        case 'year':
          return `${val}年`
        case 'month':
          if (this.type === 'quarterly') {
            return `Q${Math.ceil(Number(val) / 3)}`
          }
          return `${val}月`
        case 'day':
          return `${val}日`
        default:
          return val
      }
    },
    // 对选项过滤，实现自定义时间间隔
    filter (type, options) {
      let arr = options
      // 有可选时间区间的情况下需要就行列数据的重置
      if (Array.isArray(this.validDate) && this.validDate.length) {
        const myCurrentDateStr = this.format(this.myCurrentDate.getTime(), this.formatStr)
        switch (type) {
          case 'year':
            
            break
          case 'month':
            arr = options.filter((opItem, opIndex) => this.timeSelectableInterval.some((someItme, someIndex) => `${myCurrentDateStr.substr(0, 4)}${opItem}` === `${someItme.substr(0, 6)}`))
            break
          case 'day':
            arr = options.filter((opItem, opIndex) => this.timeSelectableInterval.some((someItme, someIndex) => `${myCurrentDateStr.substr(0, 6)}${opItem}` === `${someItme.substr(0, 8)}`))
            break
          default:
            break
        }
      }
      if (this.type === 'quarterly' && type === 'month') {
        arr = options.filter((opItem, opIndex) => this.lastMonthArr.includes(opItem))
      }
      return arr
    }
  },
  mounted () {
    
  }
}
</script>
