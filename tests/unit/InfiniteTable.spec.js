
import { mount, shallowMount } from '@vue/test-utils'
import InfiniteTable from '@/packages/infinite-table/src/index.vue'

const getTestData = function () {
  return [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
}

const getTestHeader = function () {
  return [
    {
      prop: 'date',
      label: '日期',
      width: '180'
    },
    {
      prop: 'name',
      label: '姓名',
      width: '180'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
}
describe('InfiniteTable.vue', () => {
  const data = getTestData()
  const header = getTestHeader()

  const wrapper = shallowMount(InfiniteTable, {
    propsData: {
      data,
      header
    }
  })

  it('headerData to checked', () => {
    const wrapperArrayCell = wrapper.findAll('.el-table__header-wrapper thead .cell')
    header.forEach((hItem, hIndex) => {
      expect(wrapperArrayCell.at(hIndex).text()).toBe(hItem.label)
    })
  })

  it('tableData to checked', () => {
    const wrapperArrayRow = wrapper.findAll('.el-table__body-wrapper .el-table__row')
    data.forEach((dItem, dIndex) => {
      const wrapperArrayRowCell = wrapperArrayRow.at(dIndex).findAll('.cell')
      header.forEach((hItem, hIndex) => {
        expect(wrapperArrayRowCell.at(hIndex).text()).toBe(dItem[hItem.prop])
      })
    })
    wrapper.destroy()
  })
})
