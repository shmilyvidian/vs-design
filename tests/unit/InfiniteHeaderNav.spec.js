import { mount } from '@vue/test-utils'
import InfiniteHeaderNav from '@/packages/infinite-header-nav/src/index.vue'
const wrapper = mount(InfiniteHeaderNav)

describe('Infinite header nav.vue', () => {
  test('render InfiniteHeaderNav', () => {
    const wrapper = mount(InfiniteHeaderNav)
    expect(wrapper).toMatchSnapshot()
  })

  it('shonld render header-container class', () => {
    expect(wrapper.attributes().class).toMatch('header-wrapper')
    wrapper.destroy()
  })

  it('test click event', async () => {
    const wrapper = mount(InfiniteHeaderNav)
    wrapper.vm.$emit('goBack')
    wrapper.vm.$emit('goBack', { name: 'xiaoming' })
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goBack.length).toBe(2)
  })
})
