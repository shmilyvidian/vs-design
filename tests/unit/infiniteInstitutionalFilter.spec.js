import {
  shallowMount,
  mount
} from '@vue/test-utils'
import infiniteInstitutionalFilter from '../../packages/infinite-institutional-filter/src/index.vue'

const columns = {
  children: [{
    children: [
      {
        children: [],
        name: '深圳',
        order: 3,
        code: '333'
      }
    ],
    name: '北部战区',
    order: 2,
    code: '001'
  },
  {
    children: [],
    name: '东部战区',
    order: 1,
    code: '002'
  },
  {
    children: [],
    name: '西部战区',
    order: 1,
    code: '888'
  },
  {
    children: [],
    name: '南部战区',
    order: 1,
    code: '099'
  }
  ],
  name: '全行',
  order: 1,
  code: 'ALL'
}

test('filter confirm & cancel event', () => {
  const wrapper = mount
  (infiniteInstitutionalFilter, {
    propsData: {
      columns: columns,
      showModle: true,
      headerMap: ['测试', '战区', '城市', '公司'],
      showNameToHeader: true,
      showSearch: true
    }
  })

  // 触发点击事件
  wrapper.find('.institutional-filter-footer-confirm').trigger('click')
  wrapper.find('.institutional-filter-footer-cancel').trigger('click')
  wrapper.find('.institutional-filter-content-item').trigger('click')
  wrapper.find('.institutional-filter-header-item').trigger('click')
  wrapper.find('.vs-institutional-filter-overlay').trigger('click')

  // 检测方法是否触发
  expect(wrapper.emitted('onConfirm')[0]).toBeTruthy()
  expect(wrapper.emitted('onCancel')[0]).toBeTruthy()
})

// 给input设置参数
test('setValue to input', async () => {
  const wrapper = mount
  (infiniteInstitutionalFilter, {
    propsData: {
      columns: columns
    }
  })

  const textInput = wrapper.find('.institutional-filter-search-input')

  textInput.trigger('input')
  await textInput.setValue('北')

  expect(wrapper.find('input[type="text"]').element.value).toBe('北')
})

// 设置样式
test('set wrappperStyle', async () => {
  const wrapper = mount
  (infiniteInstitutionalFilter, {
    propsData: {
      columns: columns,
      wrappperStyle: {
        color: '#fff'
      }
    }
  })

  expect(wrapper.find('.vs-institutional-filter').attributes().style).toBe('color: rgb(255, 255, 255); display: none;')
});
