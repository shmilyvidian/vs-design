import { shallowMount, mount } from '@vue/test-utils'
import InfiniteEmpty from '@/packages/infinite-empty/src/index.vue'

const wrapper = mount(InfiniteEmpty)

describe('InfiniteEmpty.vue', () => {
  test('render InfiniteEmpty', () => {
    const wrapper = shallowMount(InfiniteEmpty)
    expect(wrapper).toMatchSnapshot()
  })

  it('shonld render empty-container class', () => {
    expect(wrapper.attributes().class).toMatch('empty-container')
    wrapper.destroy()
  })

  it('renders props.type to match class', () => {
    const typeArr = ['noUpdate', 'noData', 'noMessage', 'noFinish', 'noTask', 'noNetwork']
    typeArr.forEach(itemType => {
      // console.log('itemType', itemType);
      const wrapper = shallowMount(InfiniteEmpty, {
        propsData: { 
          type: itemType
        }
      })
      // console.log('wrapper.attributes()=', wrapper.attributes());
      expect(wrapper.attributes().type).toMatch(itemType)
      wrapper.destroy()
    })
  })
})
