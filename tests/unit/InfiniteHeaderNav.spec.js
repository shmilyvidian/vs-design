import { mount } from '@vue/test-utils'
import InfiniteHeaderNav from '@/packages/infinite-header-nav/src/index.vue'

const wrapper = mount(InfiniteHeaderNav)

describe('Infinite header nav.vue', () => {

  test('render InfiniteHeaderNav', () => {
    const wrapper = mount(InfiniteHeaderNav)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render vs-header-wrapper class', () => {
    expect(wrapper.attributes().class).toBe('vs-header-wrapper')
    wrapper.destroy()
  })

  it('should not render backIcon when showBackIcon is false', () => {
    const wrapper = mount(InfiniteHeaderNav, {
      propsData: {
        showBackIcon: false,
      }
    })
    expect(wrapper.find('.vs-header-left').attributes().class).toMatch('no-visibility')
    wrapper.destroy()
  })

  it('has size and color style', () => {
    const wrapper = mount(InfiniteHeaderNav, {
      propsData: {
        size: '10px',
      }
    })
    expect(wrapper.props().size).toContain('10px')
    wrapper.destroy()
  })

  it('should not render backIcon when showBackIcon is false', () => {
    const wrapper = mount(InfiniteHeaderNav, {
      propsData: {
        showBackIcon: false,
      }
    })

    expect(wrapper.findAll('img').exists()).toBeFalsy()
    expect(wrapper.find('.vs-header-left').attributes().class).toMatch('no-visibility')
    wrapper.destroy()
  })
  
  it('test header slots', () => {
    const wrapper = mount(InfiniteHeaderNav, {
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


  it('test click event', async () => {
    const wrapper = mount(InfiniteHeaderNav)
    wrapper.find('.vs-header-left').trigger('click')
    wrapper.vm.$emit('goBack')
    wrapper.vm.$emit('goBack', { name: 'xiaoming' })
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goBack.length).toBe(3)
  })
})
