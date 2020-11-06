## toast 组件

空状态时的占位提示

### 基础用法

:::demo


```html
<el-row>  
  <infinite-table
    :table-data="tableData"
  >
    
  </infinite-table>
</el-row>
<script>
  export default {
    data() {
      return {
        tableData:{
          data:[
            {
              name:'小明',
              age:'12',
              sex:'男',
            },
            {
              name:'小红',
              age:'12',
              sex:'女',
            },
            {
              name:'阿紫',
              age:'18',
              sex:'女',
            },
          ],
          columns: [
            {
              name: '姓名',
              key: 'name',
            },
            {
              name: '年龄',
              key: 'age',
            },
            {
              name: '性别',
              key: 'sex',
            }
          ]
        }
      }
    },
    methods: {
      handleClick() {
        // this.$infiniteToast.loading({
        //   message: '加载中...',
        //   forbidClick: true,
        // });
        // console.log(this)
      }
    }
  }
</script>
```
