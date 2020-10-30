import { v4 } from 'uuid'
const DataSet = require('@antv/data-set')
const G2 = require('@antv/g2')

export default {
  computed: {
    G2: function () {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2
      } else {
        return G2
      }
    }, 
    DataSet: function () {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet
      } else {
        return DataSet
      }
    },
    id: function () {
      return v4()
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function (val, oldVal) {
      this.drawChart(val)
    }
  },
  methods: {
    // 构造图表实例
    constructChart () {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy()
      }
      const dom = document.getElementById(this.id)
      if (dom && dom.innerHTML) {
        dom.innerHTML = ''
      }
      return new this.G2.Chart({
        container: this.id,
        width: dom.offsetWidth || 800,
        height: dom.offsetHeight || 500,
        padding: this.padding || ['auto', 'auto']
      })
    },
    drawChart (data) {
      // 新建实例
      this.chart = this.constructChart()

      // 配置图表
      this.setChartConfig(data)

      // 绘制
      this.chart.render()

      const e = document.createEvent('Event')
      e.initEvent('resize', true, true)
      window.dispatchEvent(e)

      let _this = this
      // 销毁实例
      this.$once('hook:beforeDestroy', function () {
        _this.chart.destroy()
      })
    }
  },
  mounted () {
    this.drawChart(this.data)
  }
}
