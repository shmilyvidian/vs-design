import {
  shallowMount,
} from '@vue/test-utils'
import InfinitePopup from '@/packages/infinite-popup/src/index.vue'

test('render svg when image is network', () => {
  const testText = 'test'
  const wrapper = shallowMount(InfinitePopup)

  expect(wrapper).toMatchSnapshot()
});
