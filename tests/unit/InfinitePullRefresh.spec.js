import {
  shallowMount,
} from '@vue/test-utils'
import InfinitePullRefresh from '@/packages/infinite-pull-refresh/src/index.vue'

test('test propsData pullingText change', () => {
  const testText = 'test'
  const wrapper = shallowMount(InfinitePullRefresh, {
    propsData: {
      pullingText: testText,
    }
  })
  expect(wrapper.find('pullrefresh-stub').attributes().pullingtext).toBe('test')
});
