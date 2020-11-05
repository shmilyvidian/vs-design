import { shallowMount } from '@vue/test-utils'
import InfiniteButton from '@/packages/infinite-button/src/index.vue'
describe('InfiniteButton.vue', () => {
  it('renders props.type to match class', () => {
    const type = 'danger'
    const wrapper = shallowMount(InfiniteButton, {
      propsData: { type }
    })
    expect(wrapper.attributes().class).toMatch(`infinite-button--${type}`)
    wrapper.destroy()
  })
})

