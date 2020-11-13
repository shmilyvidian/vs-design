import {
  shallowMount
} from '@vue/test-utils'
import InfinitePopup from '@/packages/infinite-picker/src/index.vue'

test('render popup', () => {
  const wrapper = shallowMount(InfinitePopup)

  expect(wrapper).toMatchSnapshot()
})
