<template>
  <div>
    <el-row class="infinite-doc-demo-block-row">
      <div
        @click="show"
        class="row-btn"
      >机构筛选器</div>
      <vs-institutional-filter
        :columns="columns"
        v-model="showModel"
        :wrappperStyle="{color: '#fff'}"
        @onConfirm="onConfirm"
      ></vs-institutional-filter>
    </el-row>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {

  data () {
    return {
      showModel: true,
      columns: {
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [

                        ],
                        name: '西乡街道西乡街道西乡街道西乡街道西乡街道西乡街道西乡街道西乡街道',
                        order: 5,
                        code: '222'
                      }
                    ],
                    name: '宝安',
                    order: 4,
                    code: '11'
                  }, {
                    children: [
                      {
                        children: [

                        ],
                        name: '深南大道',
                        order: 5,
                        code: '3333'
                      }
                    ],
                    name: '福田',
                    order: 4,
                    code: '008'
                  }
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
              },
              {
                children: [

                ],
                name: '广西',
                order: 3,
                code: '92383'
              },
              {
                children: [

                ],
                name: '佛山',
                order: 3,
                code: '123123'
              },
              {
                children: [

                ],
                name: '汕头',
                order: 3,
                code: 'dsdsd'
              },
              {
                children: [

                ],
                name: '中山',
                order: 3,
                code: '123123133fd'
              },
              {
                children: [

                ],
                name: '东莞',
                order: 3,
                code: '3sisjd'
              },
              {
                children: [

                ],
                name: '惠州',
                order: 3,
                code: '惠州'
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
          },
          {
            children: [

            ],
            name: '西部战区',
            order: 1,
            code: '888'
          },
          {
            children: [

            ],
            name: '南部战区',
            order: 1,
            code: '099'
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
      this.showModel = true
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
