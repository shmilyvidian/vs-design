import { shallowMount, mount } from '@vue/test-utils'
import InfiniteEmpty from '@/packages/infinite-empty/src/index.vue'
import InfiniteLoading from '@/packages/infinite-loading/src/index.vue'

const wrapper = mount(InfiniteEmpty)

describe('InfiniteEmpty.vue', () => {
  it('shonld render empty-container class', () => {
    expect(wrapper.attributes().class).toMatch('empty-container')
    wrapper.destroy()
  })

  it('renders props.type to match class', () => {
    const typeArr = ['error', 'network', 'search']
    typeArr.forEach(itemType => {
      // console.log('itemType', itemType);
      const wrapper = shallowMount(InfiniteEmpty, {
        propsData: { 
          type: itemType,
        }
      })
      expect(wrapper.attributes().type).toMatch(itemType)
      wrapper.destroy()
    })
  })

})

