import {
  shallowMount,
} from '@vue/test-utils'
import InfinitePullRefresh from '@/packages/infinite-pull-refresh/src/index.vue'

test('render svg when image is network', () => {
  const testText = 'test'
  const wrapper = shallowMount(InfinitePullRefresh, {
    propsData: {
      pullingText: testText,
    }
  })
  console.log(wrapper.html())
  console.log(wrapper.find('pullrefresh-stub').attributes().pullingtext)
  expect(wrapper.find('pullrefresh-stub').attributes().pullingtext).toBe('test')
});
