import { shallowMount, mount } from '@vue/test-utils'
import InfiniteLoading from '@/packages/infinite-loading/src/index.vue'
describe('InfiniteLoading.vue', () => {
  const colorArr = ['orange', 'blue']
  it('renders props.type to match color', () => {
    colorArr.forEach(colorType => {
      const wrapper = shallowMount(InfiniteLoading, {
        propsData: { 
          color: colorType,
        }
      })
      expect(wrapper.attributes().color).toMatch(colorType)
      wrapper.destroy()
    })
  })
  it('renders props.type to match class', () => {
    const typeArr = ['circular', 'spinner']
    typeArr.forEach(itemType => {
      // console.log('itemType', itemType);
      const wrapper = shallowMount(InfiniteLoading, {
        propsData: { 
          type: itemType,
        }
      })
      // console.log('mountmount', mount(InfiniteLoading).classes());
      // console.log('wrapper', wrapper.classes());
      // console.log('wrapper.attributes()', wrapper.attributes());
      expect(wrapper.attributes().type).toMatch(itemType)

      // const containType = mount(InfiniteLoading).classes().includes(`van-loading--${itemType}`)
      // expect(containType).toBe(true)
      wrapper.destroy()
    })
  })

  it('renders props.type to match class', () => {
      // console.log('itemType', itemType);
      const wrapper = mount(InfiniteLoading, {
        propsData: { 
          loadingText: "hello world",
        }
      })
      console.log('mountmount', wrapper.$el);
      console.log(wrapper.$el);
      expect(wrapper.$el.textContent).to.contain('hello world')

      wrapper.destroy()
  })

})

