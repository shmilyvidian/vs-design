import { shallowMount, mount } from '@vue/test-utils'
import InfiniteHeaderNav from '@/packages/infinite-header-nav/src/index.vue'
import InfiniteEmpty from '@/packages/infinite-empty/src/index.vue'

import sinon from 'sinon'

console.log('InfiniteEmpty', InfiniteEmpty)
const wrapper = mount(InfiniteHeaderNav)

describe('Infinite header nav.vue', () => {
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

  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = shallowMount(InfiniteEmpty)
    wrapper.findComponent(InfiniteHeaderNav).vm.$emit('goBack')
    console.log('final wrapper.html()', wrapper.html())
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Emitted!')
  })
})
