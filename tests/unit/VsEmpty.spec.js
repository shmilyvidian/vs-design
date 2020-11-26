import { shallowMount, mount } from '@vue/test-utils'
import VsEmpty from '@/packages/vs-empty/src/index.vue'

const wrapper = mount(VsEmpty)

describe('VsEmpty.vue', () => {
  // 通过快照校验组件内容变动
  test('render VsEmpty', () => {
    const wrapper = shallowMount(VsEmpty)
    expect(wrapper).toMatchSnapshot()
  })
  // 测试组件class名是否正确渲染
  it('shonld render empty-container class', () => {
    expect(wrapper.attributes().class).toMatch('vs-empty-container')
    wrapper.destroy()
  })
  // 测试props imageType是否正确渲染
  it('renders imageType to match class', () => {
    const typeArr = ['noUpdate', 'noData', 'noMessage', 'noFinish', 'noTask', 'noNetwork']
    typeArr.forEach(itemType => {
      const wrapper = shallowMount(VsEmpty, {
        propsData: { 
          imageType: itemType
        }
      })
      expect(wrapper.props().imageType).toMatch(itemType)
      wrapper.destroy()
    })
  })
  // 测试props imageSize是否正确渲染
  it('test props imageSize', () => {
    const wrapper = mount(VsEmpty, {
      propsData: {
        imageSize: '60px'
      }
    })
    expect(wrapper.props().imageSize).toContain('60px')
    wrapper.destroy()
  })
  // 测试props description是否正确渲染
  it('test empty.vue description', () => {
    const wrapper = mount(VsEmpty, {
      propsData: {
        description: 'description text'
      }
    })
    expect(wrapper.html()).toMatch('description text')
    wrapper.destroy()
  })
  // 测试props insertStyle样式是否生效
  it('test empty.vue insertStyle', () => {
    const wrapper = mount(VsEmpty, {
      propsData: {
        insertStyle: {
          description: {
            fontSize: '18px',
            paddingTop: '10px'
          }
        }
      }
    })
    const styleResult = wrapper.find('.vs-description').attributes().style
    expect(styleResult).toMatch('font-size: 18px')
    expect(styleResult).toMatch('padding-top: 10px')
    wrapper.destroy()
  })
  // 测试slots插槽传入内容是否生效
  it('test empty.vue slots', () => {
    const wrapper = mount(VsEmpty, {
      slots: {
        default: 'slot text'
      }
    })
    expect(wrapper.html()).toMatch('slot text')
    wrapper.destroy()
  })
})
