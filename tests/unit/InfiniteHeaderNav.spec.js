import { shallowMount, mount } from '@vue/test-utils'
import InfiniteHeaderNav from '@/packages/infinite-header-nav/src/index.vue'

const wrapper = mount(InfiniteHeaderNav)

describe('InfiniteEmpty.vue', () => {
  it('shonld render empty-container class', () => {
    expect(wrapper.attributes().class).toMatch('header-wrapper')
    wrapper.destroy()
  })

  it('renders props.type to match class', () => {
    const typeArr = ['error', 'network', 'search']
 
  })

})

