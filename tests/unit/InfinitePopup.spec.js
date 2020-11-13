import {
  shallowMount
} from '@vue/test-utils'
import InfinitePopup from '@/packages/infinite-popup/src/index.vue'

test('render popup', () => {
  const wrapper = shallowMount(InfinitePopup)

  expect(wrapper).toMatchSnapshot()
})
