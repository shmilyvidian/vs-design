<template>
  <div>
    <el-row class="infinite-doc-demo-block-row">
      <div
        @click="show"
        class="row-btn"
      >机构筛选器</div>
      <infinite-institutional-filter
        :columns="columns"
        v-model="showModle"
        @onConfirm="onConfirm"
      ></infinite-institutional-filter>
    </el-row>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {

  data () {
    return {
      showModle: false,
      columns: {
        children: [
          {
            children: [
              {
                children: [

                ],
                name: '深圳',
                order: 3,
                code: '003'
              }, {
                children: [

                ],
                name: '广州',
                order: 3,
                code: '004'
              }
            ],
            name: '北部战区',
            order: 2,
            code: '001'
          },
          {
            children: [

            ],
            name: '东部战区',
            order: 1,
            code: '002'
          }
        ],
        name: '全行',
        order: 1,
        code: 'ALL'
      }
    }
  },
  methods: {
    show () {
      this.showModle = true
    },
    onConfirm (val) {
      console.log(val)
      let text = ''
      val.forEach((element, index) => {
        if (index !== 0) {
          text += ','
        }
        text += element.name
      })
      Toast(text)
    }
  }
}
</script>

<style lang="scss" scoped>
.row-btn {
  background-color: #000;

  color: #fff;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
