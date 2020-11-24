import {
  shallowMount,
  mount
} from '@vue/test-utils'
import infiniteInstitutionalFilter from '../../packages/vs-institutional-filter/src/index.vue'

const later = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

const columns = {
  children: [{
      children: [{
        children: [],
        name: '深圳',
        order: 3,
        code: '333'
      }],
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

test('filter confirm & cancel event', async () => {
  const wrapper = mount(infiniteInstitutionalFilter, {
    propsData: {
      columns: columns,
      showModel: true,
      headerMap: ['测试', '战区', '城市', '公司'],
      showNameToHeader: true,
      showSearch: true
    }
  })
  await later(2000)

  // 触发点击事件

  
  wrapper.find('.institutional-filter-footer-cancel').trigger('click')
  wrapper.find('.institutional-filter-footer-confirm').trigger('click')

  // 检测方法是否触发
  expect(wrapper.emitted('onConfirm')[0]).toBeTruthy()
  expect(wrapper.emitted('onCancel')[0]).toBeTruthy()
})

// 测试内容点击后是否切换到子集
test('content item click',async () => {
  const wrapper = mount(infiniteInstitutionalFilter, {
    propsData: {
      columns: columns,
      showNameToHeader: true
    }
  })
  
  // 触发点击事件
  wrapper.find('.institutional-filter-content-item').trigger('click')
  await later()
  // 查看点击后是否切换到子集
  expect(wrapper.find('.institutional-filter-content-item').text()).toBe('深圳')
})

// 测试头部内容点击后是否切换到头部子集
test('content item click',async () => {
  const wrapper = mount(infiniteInstitutionalFilter, {
    propsData: {
      columns: columns,
    }
  })
  
  // 触发点击事件 先切换到下一级
  
  wrapper.find('.institutional-filter-content-item').trigger('click')
  await later()
  wrapper.find('.institutional-filter-header-item').trigger('click')
  await later()
  // 查看点击后是否切换到子集
  expect(wrapper.find('.institutional-filter-content-item').text()).toBe('北部战区')
})

// 给input设置参数 并判断是否找到东部战区
test('setValue to input', async () => {
  const wrapper = mount(infiniteInstitutionalFilter, {
    propsData: {
      columns: columns
    }
  })
  
  const textInput = wrapper.find('.institutional-filter-search-input')
  
  textInput.trigger('input')
  await later()
  await textInput.setValue('东')
  await later()
  
  
  expect(wrapper.find('.institutional-filter-content-item').text()).toBe('东部战区')
  expect(wrapper.find('input[type="text"]').element.value).toBe('东')

  // 设置空值 
  textInput.trigger('input')
  await textInput.setValue('')
  expect(wrapper.find('input[type="text"]').element.value).toBe('')
  expect(wrapper.find('.institutional-filter-content-item').text()).toBe('北部战区')

  expect(wrapper.emitted('onInput')[0]).toBeTruthy()
})

// 设置样式
test('set wrappperStyle', async () => {
  const wrapper = mount(infiniteInstitutionalFilter, {
    propsData: {
      columns: columns,
      wrappperStyle: {
        color: '#fff'
      }
    }
  })
  
  expect(wrapper.find('.vs-institutional-filter').attributes().style).toBe('color: rgb(255, 255, 255); display: none;')
});

// 设置样式
test('setProps showNameToHeader showSearch', async () => {
  const wrapper = mount(infiniteInstitutionalFilter)
  wrapper.setProps({
    columns: columns,
    showNameToHeader: true,
    showSearch: true
  })
    expect(wrapper.vm.showNameToHeader).toBe(true)
    expect(wrapper.vm.showSearch).toBe(true)
});

// 点击蒙层 隐藏弹窗
test('set wrappperStyle', async () => {
  const wrapper = mount(infiniteInstitutionalFilter, {
    propsData: {
      columns: columns,
      showModel: true
    }
  })

  await later(2000)
  // console.log(wrapper.html())
  wrapper.find('.vs-institutional-filter-overlay').trigger('click')
  
  await later()
  
  expect(wrapper.emitted('onClickOverlay')[0]).toBeTruthy()
  // expect(wrapper.find('.vs-institutional-filter').attributes().style).toBe('display: none;')
});
