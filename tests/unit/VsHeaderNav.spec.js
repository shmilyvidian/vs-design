import { mount } from '@vue/test-utils'
import VsHeaderNav from '@/packages/vs-header-nav/src/index.vue'

const wrapper = mount(VsHeaderNav)

describe('test VsHeaderNav', () => {
  // 通过快照校验组件内容变动
  test('render VsHeaderNav', () => {
    const wrapper = mount(VsHeaderNav)
    expect(wrapper).toMatchSnapshot()
  })
  // 测试组件class名是否正确渲染
  it('should render vs-header-wrapper class', () => {
    expect(wrapper.attributes().class).toBe('vs-header-wrapper')
    wrapper.destroy()
  })
  // 测试组件props 传入size时，样式是否正确
  it('has size and color style', () => {
    const wrapper = mount(VsHeaderNav, {
      propsData: {
        size: '10px'
      }
    })
    expect(wrapper.props().size).toContain('10px')
    wrapper.destroy()
  })
  // 测试组件props 传入showBackIcon时，左侧div是否正确渲染
  it('should not render backIcon when showBackIcon is false', () => {
    const wrapper = mount(VsHeaderNav, {
      propsData: {
        showBackIcon: false
      }
    })
    expect(wrapper.findAll('img').exists()).toBeFalsy()
    expect(wrapper.find('.vs-header-left').attributes().class).toMatch('no-visibility')
    wrapper.destroy()
  })
  // 测试组件slots 传入插槽内容时，显示内容是否正确
  it('test header slots', () => {
    const wrapper = mount(VsHeaderNav, {
      slots: {
        leftItem: 'leftItem',
        centerItem: 'centerItem',
        rightItem: 'rightItem'
      }
    })
    expect(wrapper.html()).toMatch('leftItem')
    expect(wrapper.html()).toMatch('centerItem')
    expect(wrapper.html()).toMatch('rightItem')
    wrapper.destroy()
  })
  // 测试组件点击事件是否正确触发
  it('test click event', async () => {
    const wrapper = mount(VsHeaderNav)
    wrapper.find('.vs-header-left').trigger('click')
    wrapper.vm.$emit('goBack')
    wrapper.vm.$emit('goBack', { name: 'xiaoming' })
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goBack.length).toBe(3)
  })
})
